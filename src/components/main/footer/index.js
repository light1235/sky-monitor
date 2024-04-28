`use client`
import React from 'react';
import './index.scss'
import Image from 'next/image'
import Decoration from '/src/assets/main/icons/social-decoration.svg';
import youTubeIcon from '/src/assets/main/icons/youtub.svg'
import teleGramIcon from '/src/assets/main/icons/telegram.svg'
import tikTokIcon from '/src/assets/main/icons/tik-tok.svg'
import Link from "next/link";


const Footer = () => {
     return (
          <footer>
               <div className="footer__inner">
                    <ul className="footer__navigation--list">
                         <div className="social-block">
                              <Image className="block-image" src={Decoration} alt="social decoration"></Image>
                              <div>
                                   <li className="footer__title">Follow us</li>
                                   <li>
                                        <div className="social__networks">
                                             <div className="social__links">
                                                  <a href="/" className="telegram"><Image src={teleGramIcon} alt="telegram icon"></Image></a>
                                             </div>
                                             <div className="social__links">
                                                  <a href="/"><Image src={youTubeIcon} alt="youtube icon"></Image></a>
                                             </div>
                                             <div className="social__links">
                                                  <a href="/"><Image src={tikTokIcon} alt="tik-tok icon"></Image></a>
                                             </div>
                                        </div>
                                   </li>
                              </div>
                         </div>
                         <li className="footer__navigation--item">
                              <ul>
                                   <li>Company</li>
                                   <li><Link href="/about-us" >About Us</Link></li>
                                   <li><a href="#">Affiliate</a></li>
                                   <li><a href="/faq">Faq</a></li>
                              </ul>
                         </li>
                         <li className="footer__navigation--item">
                              <ul>
                                   <li>Info</li>
                                   <li><Link href="/support">Support</Link></li>
                                   <li><a href="#">Rules</a></li>
                              </ul>
                         </li>
                         <li className="footer__navigation--item">
                              <ul>
                                   <li>Customer Service</li>
                                   <li><Link href="/sign-up">Registration</Link></li>
                                   <li><Link href="/login">Login</Link></li>
                                   <li><a href="#">Reset account</a></li>
                              </ul>
                         </li>
                    </ul>
               </div>
               <div className="footer__bottom-line">
                    <div className="bottom-line__inner">
                         <div className="copyright"> © 2024 All Rights Reserved</div>
                         <div className="terms"><a href="#">Privacy Policy Terms &amp; Conditions</a></div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
