import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Notification from "@/components/panel/notification-message";
import Image from "next/image";
import adminImage from "@/assets/panel/image/user-icon.jpg";
import DashBoardImage from '../../../assets/panel/icons/dashboard-icon.svg';
import ArrowBack from '../../../assets/panel/icons/arrow-right.svg';
import './index.scss'

const UserHeader = () => {
     const [showMessage, setShowMessage] = useState(false);
     const [showMenu, setShowMenu] = useState(false);

     useEffect(() => {
          // Функция-обработчик для закрытия меню при щелчке вне его области
          // const handleClickOutsideMenu = (event) => {
          //      if (!event.target.closest('.panel-menu-arrow, .panel-user-name')) {
          //           setShowMenu(false);
          //      }
          // };

          const handleClickOutsideMenu = (event) => {
               if (showMenu === true){
                    setShowMenu(false)
               }
          };

          // Добавляем обработчик при монтировании компонента
          document.addEventListener('click', handleClickOutsideMenu);

          // Убираем обработчик при размонтировании компонента
          return () => {
               document.removeEventListener('click', handleClickOutsideMenu);
          };
     }, [showMenu]);

     return (
          <div className="user-header">
               <div className="header-panel">
                    <div className="panel-notify"><i className={showMessage ? 'icon-bell-alt' : 'icon-bell'} onClick={() => setShowMessage(!showMessage)}></i><div className="notify-amount">8</div>
                         {showMessage &&
                              <div className="notify-menu">
                                   dora
                                   {/*<Notification/>*/}
                                   {/*<Notification/>*/}
                                   {/*<Notification/>*/}
                                   {/*<Notification/>*/}
                              </div>
                         }
                    </div>
                    <div className="panel-separator"></div>
                    <div className="panel-user-image">
                         <Image src={adminImage} alt="admin image" />
                    </div>
                    <div className="panel-user-name" onClick={() =>setShowMenu(!showMenu)}>Power Ranger</div>
                    <div className="panel-menu-arrow">
                         <i className={showMenu ? 'icon-up-dir' : 'icon-up-dir open-menu'} onClick={() =>setShowMenu(!showMenu)}></i>
                         {showMenu &&
                              <div className="panel-menu">
                                   <div><Link href="/my/dashboard"><Image src={DashBoardImage} alt="img"/><p>Dashboard</p></Link></div>
                                   <div><Link href="/my/profile"><i className="icon-user"></i><p>Profile</p></Link></div>
                                   <div><Link href="/#"><Image src={ArrowBack} alt="img"/><p>Back to site</p></Link></div>
                                   <div><Link href="/my/dashboard"><i className="icon-logout"></i><p>Logout</p></Link></div>
                              </div>
                         }
                    </div>
               </div>
          </div>
     );
};

export default UserHeader;
