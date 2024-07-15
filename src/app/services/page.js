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


const Services = () => {
     return (
          <section className="Services-page">
               <div className="page-container">
                    <div className="services-item">
                         <Link href='/listing-advertising'>
                         <div className="item-logo">
                              <div className="logo-circle"><Image src={listingLogo} width='40' alt={'listing icon'}/></div>
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
                         <Link href='/'>
                         <div className="item-logo">
                              <div className="logo-circle"><Image src={bannerLogo}  width='40'alt={'listing icon'}/></div>
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
                         <Link href='/'>
                         <div className="item-logo">
                              <div className="logo-circle"><Image src={popLogo} width='40' alt={'listing icon'}/></div>
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
                         <Link href='/'>
                         <div className="item-logo">
                              <div className="logo-circle"><Image src={listingPin} width='40' alt={'listing icon'}/></div>
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
                         <Link href='/'>
                         <div className="item-logo">
                              <div className="logo-circle"><Image src={listingRaise} width='40' alt={'listing icon'}/></div>
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
                         <Link href='/'>
                         <div className="item-logo">
                              <div className="logo-circle"><Image src={projectLogo} width="40" alt={'listing icon'}/></div>
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
     );
};

export default Services;
