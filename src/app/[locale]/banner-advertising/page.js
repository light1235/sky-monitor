import React from 'react';
import './index.scss'
import HeaderBanner from '@/assets/main/images/header-banner.jpg'
import ListingBanner from '@/assets/main/images/listing-banner.jpg'
import Image from "next/image";
import {useTranslations} from "next-intl";


const BannerPackages  = () => {
     const t = useTranslations();
     return (
          <div className="banner__page">
               <div className="page-container">
                    <h1><strong>{t('BannerPage.heading')}</strong></h1>
                    <h2>{t('BannerPage.subHeading')}</h2>
                    <ul>
                         <li><p>{t('BannerPage.bannerTypes.topBanner')}</p></li>
                         <li><p>{t('BannerPage.bannerTypes.lowerBanner')}</p></li>
                    </ul>
                    <h3>{t('BannerPage.headerBannerTitle')}</h3>
                    <Image src={HeaderBanner} alt="faq image"></Image>
                    <p>{t('BannerPage.headerBannerTechFeatures')}</p>

                    <h3>{t('BannerPage.listingBannerTitle')}</h3>
                    <Image src={ListingBanner} alt="faq image"></Image>
                    <p>{t('BannerPage.listingBannerTechFeatures')}</p>

                    <h3>{t('BannerPage.purchaseStepsTitle')}</h3>
                    <ul>
                         <li><p>{t('BannerPage.purchaseSteps.step1')}</p></li>
                         <li><p>{t('BannerPage.purchaseSteps.step2')}</p></li>
                         <li><p>{t('BannerPage.purchaseSteps.step3')}</p></li>
                    </ul>

                    <h3>{t('BannerPage.formFillingTitle')}</h3>
                    <ul>
                         <li><p>{t('BannerPage.formFillingSteps.step1')}</p></li>
                         <li><p>{t('BannerPage.formFillingSteps.step2')}</p></li>
                         <li><p>{t('BannerPage.formFillingSteps.step3')}</p></li>
                         <li><p>{t('BannerPage.formFillingSteps.step4')}</p></li>
                         <li><p>{t('BannerPage.formFillingSteps.step5')}</p></li>
                         <li><p>{t('BannerPage.formFillingSteps.step6')}</p></li>
                         <li><p>{t('BannerPage.formFillingSteps.step7')}</p></li>
                         <li><p>{t('BannerPage.formFillingSteps.step8')}</p></li>
                         <li><p>{t('BannerPage.formFillingSteps.step9')}</p></li>
                    </ul>
               </div>
          </div>
     );
};

export default BannerPackages;
