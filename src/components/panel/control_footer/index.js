import React from 'react';
import './index.scss'
import Image from "next/image";
import menuLogo from '/src/assets/panel/icons/panel-logo.svg';
import Link from "next/link";
import {usePathname} from "next/navigation";

const ControlMenu = () => {

     const pathname = usePathname();
     return (
          <div className="control-menu">
               <div className="menu-top">
                    <Link href="/panel" >
                    <Image src={menuLogo} alt="logo" />
                    <p>Sky  Panel</p>
                    </Link>
               </div>
               <div className="main-menu">
                    <Link href='/panel'></Link>
                    <ul>
                         <li className={pathname === '/panel' ? 'active-menu' : ''}><Link href='/panel'><i className="icon-home"></i>Dashboard</Link></li>
                         <li className={pathname === '/panel/seo-statistics' ? 'active-menu' : ''}> <Link href='/panel/seo-statistics'><i className="icon-chart-area"></i> Seo Statistics</Link></li>
                         <li className={pathname === '/panel/listing' ? 'active-menu' : ''}><Link href='/panel/listing'><i className="icon-listing"></i>Listing</Link></li>
                         <li className={pathname === '/panel/information' ? 'active-menu' : ''}><Link href='/panel/information'><i className="icon-info"></i>Information</Link></li>
                         <li className={pathname === '/panel/news' ? 'active-menu' : ''}><Link href='/panel/news'><i className="icon-newspaper"></i>News</Link></li>
                         <li><Link href='/panel'><i className="icon-thumbs-up-alt"></i>Vote</Link></li>
                         <li><Link href='/panel'><i className="icon-sale"></i>Sale statistics</Link></li>
                         <li><Link href='/panel'><i className="icon-warning"></i>Alerts</Link></li>
                         <li><Link href='/panel'><i className="icon-time-line"></i>Timeline advertise</Link></li>
                         <li className={pathname === '/panel/support' ? 'active-menu' : ''}><Link href='/panel/support'><i className="icon-lifebuoy"></i>Support</Link></li>
                         <li className={pathname === '/panel/partners-adm' ? 'active-menu' : ''}><Link href='/panel/partners-adm'><i className="icon-partners"></i>Partners</Link></li>
                         <li><Link href='/panel'><i className="icon-payments"></i>Payment settings</Link></li>
                    </ul>
               </div>
          </div>
     );
};

export default ControlMenu;
