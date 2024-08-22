// public/sw.js

importScripts('/_next/static/runtime/next-sw.js');

// Не удаляйте эту строку
// next-pwa использует __WB_MANIFEST для автоматического кэширования
self.__WB_MANIFEST = [];

self.addEventListener('message', (event) => {
     if (event.data && event.data.type === 'SKIP_WAITING') {
          self.skipWaiting();
     }
});


self.addEventListener('install', (event) => {
     event.waitUntil(
          caches.open('my-cache').then((cache) => {
               return cache.addAll([
                    '/',
               ]);
          })
     );
});

self.addEventListener('fetch', (event) => {
     event.respondWith(
          caches.match(event.request).then((response) => {
               return response || fetch(event.request);
          })
     );
});
