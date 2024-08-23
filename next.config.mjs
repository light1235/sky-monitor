import withPWA from 'next-pwa';
import nextI18NextConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: true,
     swcMinify: true,
     images: {
          domains: ['cdn.discordapp.com'],
     },
     i18n: nextI18NextConfig.i18n,
     async redirects() {
          return [
               {
                    source: '/sitemap.xml',
                    destination: '/api/sitemap',
                    permanent: true,
               },
               {
                    source: '/robots.txt',
                    destination: '/api/robots',
                    permanent: true,
               },
          ];
     },
};

const isDev = process.env.NODE_ENV !== 'production';

export default withPWA({
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
})(nextConfig);
