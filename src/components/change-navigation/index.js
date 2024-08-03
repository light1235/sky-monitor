import React from 'react';
import {usePathname} from "next/navigation";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";
import Control_header from "@/components/panel/control_header";
import ControlMenu from "@/components/panel/control_footer";
import UserHeader from "@/components/dashboard/user-header";
import Head from "next/head";


const ChangeNavigation = ({children}) => {

     const pathname = usePathname();
     const isCustomHeaderFooterPage = pathname === '/panel' || pathname === '/panel/seo-statistics' || pathname === '/panel/support' || pathname === '/panel/listing' || pathname === '/panel/partners-adm' || pathname === '/panel/news' || pathname === '/panel/users-comments' || pathname === '/panel/information' || pathname === '/panel/payment-settings' || pathname === '/panel/timeline-adv' || pathname === '/panel/sale-statistics' || pathname === '/panel/alerts' || pathname === '/panel/vote';
     const isNoHeaderFooterPage  = pathname === '/login' || pathname === '/reset' || pathname === '/sign-up';
     const isDashboard = pathname === '/my/dashboard' || pathname === '/my/profile';

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
                                   {isDashboard ? (
                                        <>
                                             <UserHeader />
                                             {children}
                                        </>
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
               )}
          </>
     );
};

export default ChangeNavigation;

