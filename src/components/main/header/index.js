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
// import localFont from 'next/font/local'
// const myFont = localFont({ src: '../../../assets/fonts/Ubuntu-Bold.woff2' });
//
// const fontVariable = {
//      '--font-inter': `"${myFont.className}"`,
// };
// console.log(myFont.className);


const Header = () => {
     const [state, setState] = useState(1);
     const [block, setBlock] = useState(false);
     const [value, setValue] = useState('EN');

     const isLangisChange =() => {
          setBlock(true);
          setTimeout( () => {
               setBlock(false);
          },3000)
          setValue(prevValue => (prevValue === 'EN' ? 'RU' : 'EN'));
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
                             <div className="lang__menu"><div className={block ? 'image-circle active-block' : 'image-circle'} onClick={isLangisChange}><Image src={LangButton} alt={'logo'}></Image> </div><span>{value}</span></div>
                             <div className="authentication"><div className="circle"><Image src={loginAva}></Image></div> <div><Link href='/'>Login</Link><span>/</span><Link href='/'>Register</Link></div></div>

                        </div>
                   </div>
                    <div className="header__bottom">
                        <nav className="navigation">
                             <ul className="navigation__list">
                                  <li onClick={() => setState(1)} className={state === 1 ? 'active-color': null}><Link href='/'><Image src={monIco} alt={'logo'}></Image> <span>monitoring</span></Link></li>
                                  <li onClick={() => setState(2)}><Link href='/'><Image src={serviceIcon} alt={'logo'}></Image> services </Link></li>
                                  <li><Link href='/'><Image src={projectIcon} alt={'logo'}></Image>projects</Link></li>
                                  <li><Link href='/'><Image src={contactIcon} alt={'logo'}></Image>contacts</Link></li>
                                  <li><Link href='/'><Image src={partnerIcon} alt={'logo'}></Image>partners</Link></li>
                             </ul>
                        </nav>
                    </div>
               </div>

          </header>
     );
};

export default Header;
