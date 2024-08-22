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


self.addEventListener('install', event => {
console.log("PWA");
});
