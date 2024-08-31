`use client`
import React from 'react';
import './index.scss'
import Image from 'next/image'
import Decoration from '/src/assets/main/icons/social-decoration.svg';
import youTubeIcon from '/src/assets/main/icons/youtub.svg'
import teleGramIcon from '/src/assets/main/icons/telegram.svg'
import tikTokIcon from '/src/assets/main/icons/tik-tok.svg'
import {Link} from '@/i18n/routing.public'
import {useTranslations} from 'next-intl';


const Footer = () => {
     const t = useTranslations();
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
                                   <li><Link href="/about-us" >{t('footer.footerMenu.about')}</Link></li>
                                   <li><Link href="/affiliate">{t('footer.footerMenu.affiliate')}</Link></li>
                                   <li><Link href="/faq">{t('footer.footerMenu.faq')}</Link></li>
                              </ul>
                         </li>
                         <li className="footer__navigation--item">
                              <ul>
                                   <li>{t('footer.footerTop.navItem3')}</li>
                                   <li><Link href="/support">{t('footer.footerMenu.support')}</Link></li>
                                   <li><Link href="/rules">{t('footer.footerMenu.rules')}</Link></li>
                              </ul>
                         </li>
                         <li className="footer__navigation--item">
                              <ul>
                                   <li>{t('footer.footerTop.navItem4')}</li>
                                   <li><Link href="/sign-up">{t('footer.footerMenu.register')}</Link></li>
                                   <li><Link href="/login">{t('footer.footerMenu.login')}</Link></li>
                                   <li><Link href="/reset">{t('footer.footerMenu.reset')}</Link></li>
                              </ul>
                         </li>
                    </ul>
               </div>
               <div className="footer__bottom-line">
                    <div className="bottom-line__inner">
                         <div className="copyright">{t('footer.footerBottom.rights')}</div>
                         <div className="terms"><Link href="/privacy-policy">{t('footer.footerBottom.privacy')}</Link></div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
