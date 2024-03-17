import React from 'react';
import './index.scss'
import Image from "next/image";
import HeaderBell from '/src/assets/panel/icons/header-bell.svg';
import adminImage from '/src/assets/panel/image/user-icon.jpg';
import Link from "next/link";

const ControlHeader = () => {
     return (
          <div className="control-header">
             <div className="header-button">  <Link href="/"> TO SITE <i className="icon-up-circle"></i></Link></div>
               <div className="header-panel">
                    <div className="panel-notify"><Image src={HeaderBell} alt='bell icon'></Image> <div className="notify-amount">8</div></div>
                    <div className="panel-separator"></div>
                    <div className="panel-user-image">
                         <Image src={adminImage} alt="admin image" />
                    </div>
                    <div className="panel-user-name">Power Ranger</div>
                    <div className="panel-menu-arrow"><i className="icon-up-dir"></i></div>
               </div>
          </div>
     );
};

export default ControlHeader;
