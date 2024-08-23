// workbox-config.js
module.exports = {
     globDirectory: 'src/', // Укажите папку src, где находятся файлы для кэширования
     globPatterns: [
          '**/*.{js,css,html,png,jpg,svg,woff2}' // Убедитесь, что шаблон соответствует файлам, которые нужно кэшировать
     ],
     swSrc: 'src/sw-template.js', // Исходный файл service worker
     swDest: 'public/sw.js',      // Конечный файл service worker в public
};
