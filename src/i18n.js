import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale}) => {
     // Validate that the incoming `locale` parameter is valid
     if (!routing.locales.includes(locale)) notFound();

     const messages = (await import(`../messages/${locale}.json`)).default;
     const additionalMessages = (await import(`../messages/static-${locale}.json`)).default;

     return {
          messages: {
               ...messages,
               ...additionalMessages
          }
     };
});
