/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;
