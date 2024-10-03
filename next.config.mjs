import withPWA from 'next-pwa';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: true,
     swcMinify: true,
     images: {
          domains: ['cdn.discordapp.com','drive.google.com'],
     },
     async redirects() {
          return [
               {
                    source: '/en/sitemap.xml',
                    destination: '/en/api/sitemap',
                    permanent: true,
               },
               {
                    source: '/ru/sitemap.xml',
                    destination: '/ru/api/sitemap',
                    permanent: true,
               },
               {
                    source: '/en/robots.txt',
                    destination: '/en/api/robots',
                    permanent: true,
               },
          ];
     },
};

const isDev = process.env.NODE_ENV !== 'production';

export default withNextIntl(
     withPWA({
          dest: 'public',
          disable: isDev,
          register: true,
          skipWaiting: true,
          swSrc: 'public/sw.js',
          exclude: [
               ({ asset, compilation }) => {
                    if (
                         asset.name.startsWith('server/') ||
                         asset.name.match(
                              /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
                         )
                    ) {
                         return true;
                    }
                    if (isDev && !asset.name.startsWith('static/runtime/')) {
                         return true;
                    }
                    return false;
               },
          ],
     })(nextConfig)
);

