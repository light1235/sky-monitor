import React, {useEffect, useState} from 'react';
import './index.scss'
import Image from "next/image";
import HeaderBell from '/src/assets/panel/icons/header-bell.svg';
import adminImage from '/src/assets/panel/image/user-icon.jpg';
import Link from "next/link";
import Notification from "@/components/panel/notification-message";
import NotifyData from "@/db/notificationData.json";
import UserNotification from "@/components/main/user_notification";

const ControlHeader = () => {
     const [showMessage, setShowMessage] = useState(false);
     const [showMenu, setShowMenu] = useState(false);
     let messageData = [
          {
               "type": "listing",
               "listingType":'"Premium"',
               "definition": "Razzelton",
               "activity": "Purchase listing"
          },
          {
               "type": "banner",
               "definition": "Dalcas",
               "activity": "Purchase banner"
          },
          {
               "type": "pop-up",
               "definition": "Razzelton",
               "activity": "Purchase pop-up"
          },
          {
               "type": "pin",
               "definition": "Saasky",
               "activity": "Purchase an pin"
          },
          {
               "type": "raise",
               "definition": "Razzelton",
               "activity": "Purchase an raise"
          },
          {
               "type": "pin article",
               "definition": "Razzelton",
               "activity": "Purchase an article"
          }
     ]

     useEffect(() => {
          // Функция-обработчик для закрытия меню при щелчке вне его области
          const handleClickOutsideMenu = (event) => {
               if (!event.target.closest('.panel-menu-arrow, .panel-user-name')) {
                    setShowMenu(false);
               }
          };

          // Добавляем обработчик при монтировании компонента
          document.addEventListener('click', handleClickOutsideMenu);

          // Убираем обработчик при размонтировании компонента
          return () => {
               document.removeEventListener('click', handleClickOutsideMenu);
          };
     }, []);

     return (
          <div className="control-header">
             <div className="header-button">  <Link href="/"> TO SITE <i className="icon-up-circle"></i></Link></div>
               <div className="header-panel">
                    <div className="panel-notify"><i className={showMessage ? 'icon-bell-alt' : 'icon-bell'} onClick={() => setShowMessage(!showMessage)}></i><div className="notify-amount">8</div>
                         {showMessage &&
                              <div className="notify-menu">
                                   {messageData.map((item, index) =>
                                        <Notification item={item} key={index}/>
                                   )}
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
                                   <div><i className="icon-user"></i><p>Profile</p></div>
                                   <div><i className="icon-logout"></i><p>Logout</p></div>
                              </div>
                         }
                    </div>
               </div>
          </div>
     );
};

export default ControlHeader;
