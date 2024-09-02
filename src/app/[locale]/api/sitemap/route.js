import { getAllStaticRoutes, getAllDynamicRoutes } from '@/routes/routes';
import { NextResponse } from 'next/server';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || `http://localhost:3000`;

export const GET = async (request) => {
     const staticRoutes = await getAllStaticRoutes();
     const dynamicRoutes = await getAllDynamicRoutes();

     // Получаем язык из параметров запроса, либо используем дефолтный
     const { searchParams } = new URL(request.url);
     const locale = searchParams.get('lang') || 'en' || 'ru'; // Замените 'en' на ваш дефолтный язык

     const fields = [
          ...staticRoutes.map(route => ({
               loc: `${SITE_URL}/${locale}${route}`,
               lastmod: new Date().toISOString(),
               changefreq: 'daily',
               priority: 0.7,
          })),
          ...dynamicRoutes.map(route => ({
               loc: `${SITE_URL}${route}`,
               lastmod: new Date().toISOString(),
               changefreq: 'daily',
               priority: 0.7,
          })),
     ];

     const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${fields
          .map(field => {
               return `
  <url>
    <loc>${field.loc}</loc>
    <lastmod>${field.lastmod}</lastmod>
    <changefreq>${field.changefreq}</changefreq>
    <priority>${field.priority}</priority>
  </url>`;
          })
          .join('\n')}\n</urlset>`;

     return new NextResponse(sitemap, {
          headers: {
               'Content-Type': 'application/xml',
          },
     });
};

export const dynamic = 'force-dynamic';
