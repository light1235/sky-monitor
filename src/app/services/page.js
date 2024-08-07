import React from 'react';
import './index.scss'
import listingLogo from '/src/assets/main/icons/services-listing-logo.svg'
import Image from "next/image";
import Link from "next/link";
import linkLogo from '/src/assets/main/icons/services-arrow.svg';
import bannerLogo from '/src/assets/main/icons/services-banner-logo.svg';
import popLogo from '/src/assets/main/icons/services-pop-up-logo.svg';
import listingPin from '/src/assets/main/icons/servisec-listing-pin.svg';
import listingRaise from '/src/assets/main/icons/services-listing-raise.svg';
import projectLogo from '/src/assets/main/icons/services-project-icon.svg';
import Htegs from "@/components/main/hiden-tegs";
import HidenTegs from "@/components/main/hiden-tegs";


const Services = () => {
     return (
          <>
               <head>
                    <meta name="description"
                          content="Discover tailored financial solutions crafted by our expert team"/>
               </head>
               <section className="Services-page">
                   <HidenTegs text={'Services Offered: Tailored Financial Solutions for Your Needs'} />
                    <div className="page-container">
                         <div className="services-item">
                              <Link href='/listing-advertising'>
                                   <div className="item-logo">
                                        <div className="logo-circle"><Image src={listingLogo} width='40'
                                                                            alt={'listing icon'}/></div>
                                   </div>
                                   <div className="item-title">Listing Advertising</div>
                                   <div className="item-description">
                                        Description of listing packages
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
                                   <div className="item-title">Banner Advertising</div>
                                   <div className="item-description">
                                        Graphic advertisement on the website
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
                                   <div className="item-title">Pop-up Advertising</div>
                                   <div className="item-description">
                                        Advertising pop-up window on top of the main content
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
                                   <div className="item-title">Listing pin to top</div>
                                   <div className="item-description">
                                        Anchoring the project in the Overview column
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
                                   <div className="item-title">Listing raise to top</div>
                                   <div className="item-description">
                                        Raising the project on the Overview column
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
                                   <div className="item-title">Project pin to top</div>
                                   <div className="item-description">
                                        Project Anchoring in projects page
                                   </div>
                                   <div className="item-link"><Image src={linkLogo} alt='link-icon'></Image>
                                   </div>
                              </Link>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default Services;
