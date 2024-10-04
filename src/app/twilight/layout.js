"use client"
import "../globals.css";
import React from "react";

export default function RootLayout({ children }) {
     return (
          <html lang="en">
          <head>
               <meta name="robots" content="noindex, nofollow"/>
               <title>You Shall Not Pass</title>
          </head>
          <body>
          {children}
          </body>
          </html>
     )
}
