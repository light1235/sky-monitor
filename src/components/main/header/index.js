'use client'
import React, {useEffect, useState} from 'react';
import './index.scss'
import Image from 'next/image'
import LOGO from '/src/assets/logo.svg'
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
import teleGramIcon from "@/assets/main/icons/telegram.svg";
import youTubeIcon from "@/assets/main/icons/youtub.svg";
import tikTokIcon from "@/assets/main/icons/tik-tok.svg";



const Header = () => {
     const [activeLink, setActiveLink] = useState(1);
     const [block, setBlock] = useState(false);
     const [langValue, setLangValue] = useState('EN');
     const [activeMenu, setActiveMenu] = useState(true);
     const [changeLanguage, setChangeLanguage] = useState(true);

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
          // .mobile-show

     return (
          <header>
               <div className="navbar">
                   <div className="header__top">
                        <div className="logo">
                             <Link href='/'> <Image src={LOGO} alt={'logo'}></Image></Link>
                        </div>
                        <div className="middle_menu"></div>
                        <div className="left__menu">
                             <button> <Link href='/'> <Image src={buttonIcon} alt={'logo'}></Image> Add programm</Link></button>
                             <div className="lang__menu">
                                  <div className={block ? 'image-circle active-block' : 'image-circle'} onClick={isLangisChange}><Image src={LangButton} alt={'logo'}></Image> </div><span>{langValue}</span></div>
                             <div className="authentication"><div className="circle"><Image src={loginAva}></Image></div> <div><Link href='/'>Login</Link><span>/</span><Link href='/'>Register</Link></div></div>

                        </div>
                        <div className={activeMenu ? 'menu-icon-wrapper': 'menu-icon-wrapper menu-icon-active'} onClick={() => setActiveMenu(!activeMenu)}></div>
                   </div>
                    <div className="header__bottom">
                        <nav className="navigation">
                             <ul className="navigation__list">
                                  <li onClick={() => setActiveLink(1)} className={activeLink === 1 ? 'active-color': null}><Link href='/'><Image src={monIco} alt={'logo'}></Image> <span>monitoring</span></Link></li>
                                  <li onClick={() => setActiveLink(2)} className={activeLink === 2 ? 'active-color': null}><Link href='/services'><Image src={serviceIcon} alt={'logo'}></Image> services </Link></li>
                                  <li onClick={() => setActiveLink(3)} className={activeLink === 3 ? 'active-color': null}><Link href='/projects'><Image src={projectIcon} alt={'logo'}></Image>projects</Link></li>
                                  <li onClick={() => setActiveLink(4)} className={activeLink === 4 ? 'active-color': null}><Link href='/contacts'><Image src={contactIcon} alt={'logo'}></Image>contacts</Link></li>
                                  <li onClick={() => setActiveLink(5)} className={activeLink === 5 ? 'active-color': null}><Link href='/partners'><Image src={partnerIcon} alt={'logo'}></Image>partners</Link></li>
                             </ul>
                        </nav>
                    </div>
               </div>
               <div className={activeMenu ? 'mobile-navigation' : 'mobile-navigation mobile-show'}>
                    <nav className="navigation">
                         <ul>
                              <li>monitoring</li>
                              <li>services</li>
                              <li>projects</li>
                              <li>contacts</li>
                              <li>partners</li>
                         </ul>
                         <div className="line-separator"></div>
                         <ul>
                              <li>about us</li>
                              <li>support</li>
                         </ul>
                         <button><Link href='/'> <Image src={buttonIcon} alt={'logo'}></Image> Add programm</Link>
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
                                   <a href="#" className="telegram"><Image src={teleGramIcon}></Image></a>
                                   <a href="#"><Image src={youTubeIcon}></Image></a>
                                   <a href="#"><Image src={tikTokIcon}></Image></a>
                              </div>
                         </div>
                         <div className="copyright"> © 2024 All Rights Reserved</div>

                    </nav>
               </div>

          </header>
     );
};

export default Header;
