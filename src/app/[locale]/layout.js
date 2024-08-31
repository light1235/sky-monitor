import { Inter } from "next/font/google";
import "../globals.css";
import React  from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ChangeNavigation from "@/components/change-navigation";
// import { Provider } from "react-redux";
// import store from "../store/store";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';


export default async function LocaleLayout({ children, params }) {
     const { locale } = params;
     const messages = await getMessages(locale);
     return (
          <>
          <html lang={locale}>
          <head>
               <link rel="manifest" href="/manifest.json" />
          </head>
          <body>
          {/*<Provider store={store}>*/}
                    <AntdRegistry>
                         <NextIntlClientProvider messages={messages}>
                      <ChangeNavigation>{children}</ChangeNavigation>
                         </NextIntlClientProvider>
                    </AntdRegistry>
          {/*</Provider>*/}
          </body>
          </html>
          </>
     );
}


// useEffect(() => {
//      if ('serviceWorker' in navigator) {
//           navigator.serviceWorker.register('/sw.js').then(r => console.log("123"))
//      }
// }, []);
