'use client'
import React from 'react';
import {usePathname} from "next/navigation";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";
import Control_header from "@/components/panel/control_header";
import ControlMenu from "@/components/panel/control_footer";


const ChangeNavigation = ({children}) => {

     const pathname = usePathname();
     const isCustomHeaderFooterPage = pathname === '/panel' || pathname === '/panel/seo-statistics' || pathname === '/panel/support' || pathname === '/panel/listing' || pathname === '/panel/partners-adm' || pathname === '/panel/news' || pathname === '/panel/information';
     const isNoHeaderFooterPage  = pathname === '/login' || pathname === '/sign-up';

     return (
          <>
               {isCustomHeaderFooterPage ? (
                    <>
                         <Control_header />
                         {children}
                         <ControlMenu />
                    </>
               ) : (
                    <>
                         {isNoHeaderFooterPage ? (
                              [children]
                         ) : (
                              <>
                                   <Header />
                                   {children}
                                   <Footer />
                              </>
                         )}
                    </>
               )}
          </>
     );
};

export default ChangeNavigation;
