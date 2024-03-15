'use client'
import React from 'react';
import {usePathname} from "next/navigation";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";
// import Control_footer from "@/components/panel/control_footer";
import Control_header from "@/components/panel/control_header";
import ControlMenu from "@/components/panel/control_footer";


const ChangeNavigation = ({children}) => {

     const pathname = usePathname();
     const isCustomHeaderFooterPage = pathname === '/panel';


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
                      <Header />
                      {children}
                      <Footer />

                 </>
               ) }

          </>
     );
};

export default ChangeNavigation;
