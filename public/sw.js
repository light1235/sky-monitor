importScripts('/_next/static/runtime/next-sw.js');

// Не удаляйте эту строку
// next-pwa использует __WB_MANIFEST для автоматического кэширования
self.__WB_MANIFEST = [];

// Обработка SKIP_WAITING
self.addEventListener('message', (event) => {
     if (event.data && event.data.type === 'SKIP_WAITING') {
          self.skipWaiting();
     }
});

// Кэширование главной страницы при установке Service Worker
self.addEventListener('install', (event) => {
     event.waitUntil(
          caches.open('my-cache').then((cache) => {
               return cache.addAll([
                    '/',
                    '/favicon.ico', // можно добавить больше необходимых файлов
                    '/styles/global.css', // добавьте, если используете стили
                    '/_next/static/chunks/main.js', // основная логика
               ]);
          })
     );
});

// Обработка fetch-запросов
self.addEventListener('fetch', (event) => {
     event.respondWith(
          caches.match(event.request).then((response) => {
               // Если ресурс найден в кэше, возвращаем его, иначе запрашиваем из сети
               return response || fetch(event.request).catch(() => {
                    // Если сеть недоступна, можно вернуть кэшированную страницу
                    if (event.request.mode === 'navigate') {
                         return caches.match('/');
                    }
               });
          })
     );
});
