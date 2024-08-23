`use client`
import React from 'react';
import './index.scss'
import Image from 'next/image'
import Decoration from '/src/assets/main/icons/social-decoration.svg';
import youTubeIcon from '/src/assets/main/icons/youtub.svg'
import teleGramIcon from '/src/assets/main/icons/telegram.svg'
import tikTokIcon from '/src/assets/main/icons/tik-tok.svg'
import Link from "next/link";
import {useTranslation} from "react-i18next";


const Footer = () => {
     const {t, i18n} = useTranslation();
     return (
          <footer>
               <div className="footer__inner">
                    <ul className="footer__navigation--list">
                         <li className="social-block">
                              <Image className="block-image" src={Decoration} alt="social decoration"></Image>
                              <ul>
                                   <li className="footer__title">{t('footer.footerTop.navItem1')}</li>
                                   <li>
                                        <div className="social__networks">
                                             <div className="social__links">
                                                  <a rel="nofollow" href="/" className="telegram"><Image src={teleGramIcon} alt="telegram icon"></Image></a>
                                             </div>
                                             <div className="social__links">
                                                  <a  rel="nofollow" href="/"><Image src={youTubeIcon} alt="youtube icon"></Image></a>
                                             </div>
                                             <div className="social__links">
                                                  <a rel="nofollow" href="/"><Image src={tikTokIcon} alt="tik-tok icon"></Image></a>
                                             </div>
                                        </div>
                                   </li>
                              </ul>
                         </li>
                         <li className="footer__navigation--item">
                              <ul>
                                   <li>{t('footer.footerTop.navItem2')}</li>
                                   <li><Link href="/about-us" >About Us</Link></li>
                                   <li><Link href="/affiliate">Affiliate</Link></li>
                                   <li><Link href="/faq">Faq</Link></li>
                              </ul>
                         </li>
                         <li className="footer__navigation--item">
                              <ul>
                                   <li>{t('footer.footerTop.navItem3')}</li>
                                   <li><Link href="/support">Support</Link></li>
                                   <li><Link href="/rules">Rules</Link></li>
                              </ul>
                         </li>
                         <li className="footer__navigation--item">
                              <ul>
                                   <li>{t('footer.footerTop.navItem4')}</li>
                                   <li><Link href="/sign-up">Registration</Link></li>
                                   <li><Link href="/login">Login</Link></li>
                                   <li><Link href="/reset">Reset account</Link></li>
                              </ul>
                         </li>
                    </ul>
               </div>
               <div className="footer__bottom-line">
                    <div className="bottom-line__inner">
                         <div className="copyright"> © 2024 All Rights Reserved</div>
                         <div className="terms"><Link href="/privacy-policy">Privacy Policy Terms &amp; Conditions</Link></div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
