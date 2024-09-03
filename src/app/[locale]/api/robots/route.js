import { NextResponse } from 'next/server';


const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL = 'http://localhost:3000';
export const GET = (request, { params }) => {
     const locale = params.locale;
     const content = `
User-agent: *
Disallow: /api/
Disallow: /private/
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/en/sitemap.xml
Sitemap: ${SITE_URL}/ru/sitemap.xml
  `;

     return new NextResponse(content, {
          headers: {
               'Content-Type': 'text/plain',
          },
     });
};

export const dynamic = 'force-dynamic';
