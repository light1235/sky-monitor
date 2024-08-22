import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
     reactStrictMode: true,
     swcMinify: true,
     images: {
          domains: ['cdn.discordapp.com'],
     },
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

export default withPWA({
     dest: 'public',
     disable: process.env.NODE_ENV === 'development',
     register: true,
     skipWaiting: true,
     swSrc: 'public/sw.js',
})(nextConfig);
