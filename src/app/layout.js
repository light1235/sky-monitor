import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import ChangeNavigation from "@/components/change-navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sky Finance - Expert in investment analytics",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
      <AntdRegistry >
      {/*<Header />*/}
      {/*{children}*/}
      {/*<Footer />*/}
           <ChangeNavigation>{children}</ChangeNavigation>
      </AntdRegistry>
      </body>
    </html>
  );
}
