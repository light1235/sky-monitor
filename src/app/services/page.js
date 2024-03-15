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
          <div className="Services-page">
               <div className="page-container">
                    <div className="services-item">
                         <div className="item-logo">
                              <div className="logo-circle"><Image src={listingLogo} width='40' alt={'listing icon'}/></div>
                         </div>
                         <div className="item-title">Listing Advertising</div>
                         <div className="item-description">
                              описание пакетов услуг для листига и что в них входит
                         </div>
                         <div className="item-link"><Link href='/listing-advertising'><Image src={linkLogo} alt='link-icon'></Image></Link>
                         </div>
                    </div>
                    <div className="services-item">
                         <div className="item-logo">
                              <div className="logo-circle"><Image src={bannerLogo}  width='40'alt={'listing icon'}/></div>
                         </div>
                         <div className="item-title">Banner Advertising</div>
                         <div className="item-description">
                              детальное описание услуги баннера которую вы можете получить
                         </div>
                         <div className="item-link"><Link href='/'><Image src={linkLogo} alt='link-icon'></Image></Link>
                         </div>
                    </div>
                    <div className="services-item">
                         <div className="item-logo">
                              <div className="logo-circle"><Image src={popLogo} width='40' alt={'listing icon'}/></div>
                         </div>

                         <div className="item-title">Pop-up Advertising</div>
                         <div className="item-description">
                              как выглядит услуга поп ап и как она работает-
                         </div>
                         <div className="item-link"><Link href='/'><Image src={linkLogo} alt='link-icon'></Image></Link>
                         </div>
                    </div>
                    <div className="services-item">
                         <div className="item-logo">
                              <div className="logo-circle"><Image src={listingPin} width='40' alt={'listing icon'}/></div>
                         </div>
                         <div className="item-title">Listing pin to top</div>
                         <div className="item-description">
                              описание самой услуги а так же ее приемуществ
                         </div>
                         <div className="item-link"><Link href='/'><Image src={linkLogo} alt='link-icon'></Image></Link>
                         </div>
                    </div>
                    <div className="services-item">
                         <div className="item-logo">
                              <div className="logo-circle"><Image src={listingRaise} width='40' alt={'listing icon'}/></div>
                         </div>
                         <div className="item-title">Listing raise to top</div>
                         <div className="item-description">
                              дополнительная услуга для актуальных рекламодателей
                         </div>
                         <div className="item-link"><Link href='/'><Image src={linkLogo} alt='link-icon'></Image></Link>
                         </div>
                    </div>
                    <div className="services-item">
                         <div className="item-logo">
                              <div className="logo-circle"><Image src={projectLogo} width="40" alt={'listing icon'}/></div>
                         </div>
                         <div className="item-title">Project pin to top</div>
                         <div className="item-description">
                              описание услуги  описания проекта
                         </div>
                         <div className="item-link"><Link href='/'><Image src={linkLogo} alt='link-icon'></Image></Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Services;
