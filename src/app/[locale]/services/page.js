import React from 'react';
import './index.scss'
import listingLogo from '/src/assets/main/icons/services-listing-logo.svg'
import Image from "next/image";
import {Link} from '@/i18n/routing.public'
import linkLogo from '/src/assets/main/icons/services-arrow.svg';
import bannerLogo from '/src/assets/main/icons/services-banner-logo.svg';
import popLogo from '/src/assets/main/icons/services-pop-up-logo.svg';
import listingPin from '/src/assets/main/icons/servisec-listing-pin.svg';
import listingRaise from '/src/assets/main/icons/services-listing-raise.svg';
import projectLogo from '/src/assets/main/icons/services-project-icon.svg';
import Htegs from "@/components/main/hiden-tegs";
import HidenTegs from "@/components/main/hiden-tegs";
import {useTranslations} from 'next-intl';

export const metadata = {
     title: 'Sky Finance - Expert in investments',
     description: 'Discover tailored financial solutions crafted by our expert team',
};

const Services = () => {
     const t = useTranslations();
     return (
               <section className="Services-page">
                   <HidenTegs text={'Services Offered: Tailored Financial Solutions for Your Needs'} />
                    <div className="page-container">
                         <div className="services-item">
                              <Link href='/listing-advertising'>
                                   <div className="item-logo">
                                        <div className="logo-circle"><Image src={listingLogo} width='40'
                                                                            alt={'listing icon'}/></div>
                                   </div>
                                   <div className="item-title">{t('Services.Listing.title')}</div>
                                   <div className="item-description">
                                        {t('Services.Listing.description')}
                                   </div>
                                   <div className="item-link"><Image src={linkLogo} alt='link-icon'></Image>
                                   </div>
                              </Link>
                         </div>
                         <div className="services-item">
                              <Link href='/banner-advertising'>
                                   <div className="item-logo">
                                        <div className="logo-circle"><Image src={bannerLogo} width='40'
                                                                            alt={'listing icon'}/></div>
                                   </div>
                                   <div className="item-title">{t('Services.Banner.title')}</div>
                                   <div className="item-description">
                                        {t('Services.Banner.description')}
                                   </div>
                                   <div className="item-link"><Image src={linkLogo} alt='link-icon'></Image>
                                   </div>
                              </Link>
                         </div>
                         <div className="services-item">
                              <Link href='/pop-up-advertising'>
                                   <div className="item-logo">
                                        <div className="logo-circle"><Image src={popLogo} width='40'
                                                                            alt={'listing icon'}/></div>
                                   </div>
                                   <div className="item-title">{t('Services.PopUp.title')}</div>
                                   <div className="item-description">
                                        {t('Services.PopUp.description')}
                                   </div>
                                   <div className="item-link"><Image src={linkLogo} alt='link-icon'></Image>
                                   </div>
                              </Link>
                         </div>
                         <div className="services-item">
                              <Link href='/listing-pin'>
                                   <div className="item-logo">
                                        <div className="logo-circle"><Image src={listingPin} width='40'
                                                                            alt={'listing icon'}/></div>
                                   </div>
                                   <div className="item-title">{t('Services.Pin.title')}</div>
                                   <div className="item-description">
                                        {t('Services.Pin.description')}
                                   </div>
                                   <div className="item-link"><Image src={linkLogo} alt='link-icon'></Image>
                                   </div>
                              </Link>
                         </div>
                         <div className="services-item">
                              <Link href='/listing-raise'>
                                   <div className="item-logo">
                                        <div className="logo-circle"><Image src={listingRaise} width='40'
                                                                            alt={'listing icon'}/></div>
                                   </div>
                                   <div className="item-title">{t('Services.Raise.title')}</div>
                                   <div className="item-description">
                                        {t('Services.Raise.description')}
                                   </div>
                                   <div className="item-link"><Image src={linkLogo} alt='link-icon'></Image>
                                   </div>
                              </Link>
                         </div>
                         <div className="services-item">
                              <Link href='/pin-project'>
                                   <div className="item-logo">
                                        <div className="logo-circle"><Image src={projectLogo} width="40"
                                                                            alt={'listing icon'}/></div>
                                   </div>
                                   <div className="item-title"> {t('Services.Project.title')}</div>
                                   <div className="item-description">
                                        {t('Services.Project.description')}
                                   </div>
                                   <div className="item-link"><Image src={linkLogo} alt='link-icon'></Image>
                                   </div>
                              </Link>
                         </div>
                    </div>
               </section>
     );
};

export default Services;
