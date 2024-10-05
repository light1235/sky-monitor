import {headers} from 'next/headers';
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from '@/config';
import {getUserLocale} from '@/db';

async function getConfig(locale) {
  // Проверяем, что переданный `locale` является допустимым
  if (!locales.includes(locale)) notFound();

  const messages = (await import(`../../messages/${locale}.json`)).default;
  const additionalMessages = (await import(`../../messages/static-${locale}.json`)).default;


  return {
    messages: {
      ...messages,
      ...additionalMessages
    }
  };
}

export default getRequestConfig(async (params) => {
  // Читаем подсказку, установленную в middleware
  const isAppRoute = headers().get('x-app-route') === 'true';
  const isDashBoardRoute = headers().get('x-my-route') === 'true';
  const isPanel = headers().get('x-panel-route') === 'true';

  if (isAppRoute) {
    const locale = await getUserLocale();
    return {
      locale,
      ...(await getConfig(locale))
    };
  } else if (isDashBoardRoute) {
    const locale = await getUserLocale();
    return {
      locale,
      ...(await getConfig(locale))
    };
  } else if (isPanel) {
    const locale = await getUserLocale();
    return {
      locale,
      ...(await getConfig(locale))
    };
  } else {
    const locale = params.locale;
    return getConfig(locale);
  }
});
// !TODO сделать файлы под каждую страницу json (статические данные) а так же динамические данные или динамический json с данными

// async function getConfig(locale, page) {
//   // Проверяем, что переданный `locale` является допустимым
//   if (!locales.includes(locale)) notFound();
//
//   try {
//     // Импортируем JSON-файл с сообщениями для локализации
//     const messages = (await import(`../../messages/${page}/${locale}.json`)).default;
//
//     // Получаем динамические данные через fetch
//     const response = await fetch(`https://example.com/api/${page}/data?locale=${locale}`);
//
//     if (!response.ok) {
//       throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
//     }
//
//     const dynamicData = await response.json(); // Получаем JSON данные с API
//
//     return {
//       messages,
//       dynamicData
//     };
//   } catch (error) {
//     console.error(`Ошибка при загрузке данных для страницы ${page} и локали ${locale}:`, error);
//     notFound(); // Если возникла ошибка при загрузке данных или файлов
//   }
// }
