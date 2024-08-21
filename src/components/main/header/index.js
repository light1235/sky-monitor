'use client'
import React, {useEffect, useState} from 'react';
import './index.scss'
import Image from 'next/image'
import LOGO from '/src/assets/logo-2.svg'
import Link from "next/link";
import anime from 'animejs';
import monIco from '/src/assets/main/icons/monitor.svg';
import serviceIcon from '/src/assets/main/icons/services.svg';
import projectIcon from '/src/assets/main/icons/project.svg';
import contactIcon from '/src/assets/main/icons/contact.svg';
import partnerIcon from '/src/assets/main/icons/partner.svg';
import buttonIcon from '/src/assets/main/icons/button-+.svg';
import LangButton from '/src/assets/main/icons/lang-panel.svg';
import loginAva from '/src/assets/main/icons/login-ava.svg';
import LoginedAva from '/src/assets/main/icons/logined-icon.svg'
import LogAvatar from '/src/assets/main/icons/newAvaPerson.png';
import LoginedAvaNew from '/src/assets/main/icons/icon-image-face.png'
import teleGramIcon from "@/assets/main/icons/telegram.svg";
import youTubeIcon from "@/assets/main/icons/youtub.svg";
import tikTokIcon from "@/assets/main/icons/tik-tok.svg";
import Custom_modal from "@/components/main/custom_modal";
import { usePathname } from 'next/navigation'
import SelectedPopUp from "@/components/main/selected-pop-up";
import Notification from "@/components/panel/notification-message";
import NotifyData from '../../../db/notificationData.json'
import UserNotification from "@/components/main/user_notification";
import { useRouter } from 'next/navigation';


const Header = () => {
     const [block, setBlock] = useState(false);
     const [langValue, setLangValue] = useState('EN');
     const [activeMenu, setActiveMenu] = useState(true);
     const [changeLanguage, setChangeLanguage] = useState(true);
     const [activeProgram, setActiveProgram] = useState(false);
     const [isLogin, setIsLogin] = useState(false);

     const notifyArr = [
          {type:'project',withWho:'Razzelton',activity:'добавил новый проект'},
          {type:'scam',withWho:'Razzelton',activity:'сменил категорию'},
          {type:'pin',withWho:'Razzelton',activity:'закрепил проект'},
          {type:'news',withWho:'Crypto up',activity:'опубликовал статью '},
          {type:'act',withWho:'Activity', activity:'300 vote and 400 comments', vote:'300', comments:'400',date:'14-06-21'},

     ]

     const router = useRouter();

     const goToDashboard = () => {
          router.push('/my/dashboard');
     };

     const showModal = () => {
          setActiveProgram(!activeProgram);
     };

     const isLangisChange =() => {
          setBlock(true);
          setTimeout( () => {
               setBlock(false);
          },3000)
          setLangValue(prevValue => (prevValue === 'EN' ? 'RU' : 'EN'));
     }

     useEffect( () => {
          if (block){
               anime({
                    targets: 'header .navbar .header__top .left__menu .lang__menu .image-circle',
                    rotate:'+=180',
                    duration: 3500,
                    loop: false,
               });
          }


     },[block])



     const pathname = usePathname();
     const CloseMenu = () => {
          setActiveMenu(!activeMenu);
     };

     const handleLogin = () => {
          setIsLogin(!isLogin);
     };
     const [showMessage, setShowMessage] = useState(false);
     const [showMenu, setShowMenu] = useState(false);
     //
     useEffect(() => {
          // Функция-обработчик для закрытия меню при щелчке вне его области
          const handleClickOutsideMenu = (event) => {
               // if (!event.target.closest('.wrap-menu')) {
               //      setShowMenu(false);
               // }
               if (
                    !event.target.closest('.wrap-menu') &&
                    !event.target.closest('.authentication-circle')
               ) {
                    setShowMenu(false);
               }
          };

          const handleClickOutsideMessage = (event) => {
               if (!event.target.closest('.panel-notify')) {
                    setShowMessage(false);
               }
          };
          document.addEventListener('click', handleClickOutsideMessage);

          // Добавляем обработчик при монтировании компонента
          document.addEventListener('click', handleClickOutsideMenu);

          // Убираем обработчик при размонтировании компонента
          return () => {
               document.removeEventListener('click', handleClickOutsideMenu);
               document.removeEventListener('click', handleClickOutsideMessage);
          };

     }, []);

     useEffect(() => {
          if (showMessage) {
               anime({
                    targets: '.panel-notify i',
                    rotate:['20deg','-20deg','20deg','0deg'],
                    duration: 600,
                    easing: 'easeInOutQuad' ,
                    loop: false,
               });
          }
     },[showMessage])



     return (
          <header>
               <div className="navbar">
                   <div className="header__top">
                        <div className="logo">
                             <Link href='/'> <Image src={LOGO} priority={false} alt={'logo'} ></Image></Link>
                        </div>
                        <div className="middle_menu"></div>
                        <div className="left__menu">
                             <button onClick={showModal}>
                                  <div><Image src={buttonIcon} alt={'logo'} priority={true}></Image> Add program</div>
                             </button>
                             <div className="lang__menu">
                                  <div className={block ? 'image-circle active-block' : 'image-circle'}
                                       onClick={isLangisChange}><Image src={LangButton} alt="logo icon"></Image></div>
                                  <span>{langValue}</span></div>

                             <div className="authentication">
                                  {isLogin ?
                                       <>
                                            <div className="panel-notify"><i
                                                 className={showMessage ? 'icon-bell-alt' : 'icon-bell'}
                                                 onClick={() => setShowMessage(!showMessage)}></i>
                                                 <div className="notify-amount">8</div>
                                                 {showMessage &&
                                                      <div className="notify-menu">
                                                           {NotifyData.map((item,index) =>
                                                                <UserNotification item={item} key={index} />
                                                           )}
                                                      </div>
                                                 }
                                            </div>
                                            <div className="wrap-menu"  ><Image onClick={() =>setShowMenu(!showMenu)} src={LoginedAvaNew} width={50} height={50}
                                                                                                  alt="login icon">
                                            </Image>
                                                 {showMenu &&
                                                      <div className="panel-menu">
                                                          <div onClick={goToDashboard}><i className="icon-user"></i><p>Profile</p></div>
                                                           <div onClick={() => setIsLogin(false)}><i className="icon-logout"></i><p>Logout</p></div>
                                                      </div>

                                                 }
                                            </div>

                                       </>
                                       :
                                       <>
                                            <div className="circle" onClick={handleLogin}><Image src={loginAva}
                                                                                                 alt="login icon">
                                            </Image></div>
                                            <div className="login-menu"><Link href='/login'>Login</Link>
                                                 <span>/</span>
                                                 <Link href='/sign-up'>Register</Link></div>
                                       </>

                                  }
                             </div>


                        </div>
                        <div className={activeMenu ? 'menu-icon-wrapper' : 'menu-icon-wrapper menu-icon-active'}
                             onClick={() => setActiveMenu(!activeMenu)}></div>
                   </div>
                    <div className="header__bottom">
                    <nav className="navigation">
                              <ul className="navigation__list">
                                   <li className={`link ${pathname === '/' ? 'active-color' : ''}`}>
                                       <Link href='/'><Image src={monIco} alt={'logo'}></Image> <span>monitoring</span></Link></li>
                                  <li  className={`link ${pathname === '/services' ? 'active-color' : ''}`}><Link href='/services'><Image src={serviceIcon} alt={'logo'}></Image> services </Link></li>
                                  <li  className={`link ${pathname === '/projects' ? 'active-color' : ''}`}><Link href='/projects'><Image src={projectIcon} alt={'logo'}></Image>projects</Link></li>
                                  <li  className={`link ${pathname === '/contacts' ? 'active-color' : ''}`}><Link href='/contacts'><Image src={contactIcon} alt={'logo'}></Image>contacts</Link></li>
                                  <li className={`link ${pathname === '/partners' ? 'active-color' : ''}`}><Link href='/partners'><Image src={partnerIcon} alt={'logo'}></Image>partners</Link></li>
                             </ul>
                        </nav>
                    </div>
               </div>
               <div className={activeMenu ? 'mobile-navigation' : 'mobile-navigation mobile-show'}>

                    <div className="mobile-authentication">
                         {isLogin ?
                              <>
                                   <div className="authentication-circle">
                                        <Image onClick={() => setShowMenu(!showMenu)} src={LogAvatar}
                                               alt="login icon">
                                        </Image>

                                        {showMenu &&
                                             <div className="panel-menu">
                                                  <div onClick={goToDashboard}><i className="icon-user"></i><p>Profile</p></div>
                                                  <div onClick={() => setIsLogin(false)}><i className="icon-logout"></i><p>Logout</p></div>
                                             </div>

                                        }
                                   </div>
                                   <div className="authentication-name">Dora</div>
                                   <div className="panel-notify"><i
                                        className={showMessage ? 'icon-bell-alt' : 'icon-bell'}
                                        onClick={() => setShowMessage(!showMessage)}></i>
                                        <div className="notify-amount">8</div>
                                        {showMessage &&
                                             <div className="notify-menu">
                                                  {NotifyData.map((item,index) =>
                                                       <UserNotification item={item} key={index} />
                                                  )}
                                             </div>
                                        }
                                   </div>
                              </>
                              :
                              <>
                                   <div className="authentication-circle" onClick={handleLogin}>
                                        <Image src={LoginedAva}
                                               alt="login icon">
                                        </Image>
                                   </div>
                                   <ul>
                                        <li><Link onClick={CloseMenu} href='/login'>Login</Link></li>
                                        <li><Link onClick={CloseMenu} href='/sign-up'>Register</Link></li>
                                   </ul>
                              </>
                         }

                    </div>
                    <div className="line-separator"></div>
                    <nav className="navigation">
                         <ul>
                              <li><Link onClick={CloseMenu} href='/'>monitoring</Link></li>
                              <li><Link onClick={CloseMenu} href='/services'>services</Link></li>
                              <li><Link onClick={CloseMenu} href='/projects'>projects</Link></li>
                              <li><Link onClick={CloseMenu} href='/contacts'>contacts</Link></li>
                              <li><Link onClick={CloseMenu} href='/partners'>partners</Link></li>
                         </ul>
                         <div className="line-separator"></div>
                         <ul>
                              <li><Link href='/'>about us</Link></li>
                              <li><Link href='/'>support</Link></li>
                         </ul>
                         <button onClick={showModal}><Link href='/'> <Image src={buttonIcon} alt="add icon"></Image> Add
                              program</Link>
                         </button>
                         <div className="language-menu">
                              <span>Language</span>
                              <div className="wrap-language">
                                   <div className={changeLanguage ? 'active-language' : ''}
                                        onClick={() => setChangeLanguage(true)}>EN
                                   </div>
                                   <div className={changeLanguage ? '' : 'active-language'}
                                        onClick={() => setChangeLanguage(false)}>RU
                                   </div>
                              </div>
                         </div>
                         <div className="social-menu">
                              <span>Social Media</span>
                              <div className="wrap-social">
                                   <a href="#" className="telegram"><Image src={teleGramIcon}
                                                                           alt="telegram icon"></Image></a>
                                   <a href="#"><Image src={youTubeIcon} alt="youtube icon"></Image></a>
                                   <a href="#"><Image src={tikTokIcon} alt="tik-tok icon"></Image></a>
                              </div>
                         </div>
                         <div className="copyright"> © 2024 All Rights Reserved</div>
                         <Custom_modal open={activeProgram} close={showModal}><SelectedPopUp close={showModal}/>
                         </Custom_modal>
                    </nav>
               </div>

          </header>
     );
};

export default Header;
