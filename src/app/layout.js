"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useEffect, useState } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ChangeNavigation from "@/components/change-navigation";
import { Provider } from "react-redux";
import store from "../store/store";
import { appWithTranslation } from 'next-i18next';
import '../i18n';


const inter = Inter({ subsets: ["latin"] });

 function RootLayout({ children }) {
     return (
          <>
          <html lang="en">
          <head>
               <link rel="manifest" href="/manifest.json" />
          </head>
          <body>
          <Provider store={store}>
                    <AntdRegistry>
                      <ChangeNavigation>{children}</ChangeNavigation>
                    </AntdRegistry>
          </Provider>
          </body>
          </html>
          </>
     );
}
export default appWithTranslation(RootLayout);
// useEffect(() => {
//      if ('serviceWorker' in navigator) {
//           navigator.serviceWorker.register('/sw.js').then(r => console.log("123"))
//      }
// }, []);
