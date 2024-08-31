import {headers} from 'next/headers';
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from '@/config';
import {getUserLocale} from '@/db';

async function getConfig(locale) {
  // Проверяем, что переданный `locale` является допустимым
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../../messages/${locale}.json`)).default
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
