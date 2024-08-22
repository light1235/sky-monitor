"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import ChangeNavigation from "@/components/change-navigation";
import {Provider} from "react-redux";
import store from '../store/store';

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Sky Finance - Expert in investments",
//   description: "Generated by create next app",
// };
// Sky Finance - Expert in investments analytics
// Sky Finance - Analytics for investors


export default function RootLayout({ children}) {
     return (
          <html lang="en">
          <head>
               <link rel="manifest" href="/manifest.json"/>
          </head>
          <body>
          <Provider store={store}>
               <AntdRegistry>
                    <ChangeNavigation>{children}</ChangeNavigation>
               </AntdRegistry>
          </Provider>
          </body>
          </html>
     );
}
