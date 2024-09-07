import React from 'react';
import './index.scss'
import AffImage from '@/assets/main/images/socia-1.jpg';
import Image from "next/image";
import {useTranslations} from "next-intl";
const Affiliate = () => {
     const t = useTranslations();
     return (
          <section className="affiliate__page">
               <div className="page-container">
                    <Image src={AffImage} alt="aff image"/>
                    <h1><strong>{t('AffiliateProgram.welcomeHeader')}</strong></h1>
                    <h2>{t('AffiliateProgram.introHeader')}</h2>
                    <p>{t('AffiliateProgram.introDescription1')}</p>
                    <p>{t('AffiliateProgram.introDescription2')}</p>
                    <h3>{t('AffiliateProgram.offerHeader')}</h3>
                    <ul>
                         <li><p><strong>{t('AffiliateProgram.action1')}</strong>{t('AffiliateProgram.action11')}</p></li>
                         <li><p><strong>{t('AffiliateProgram.action2')}</strong>{t('AffiliateProgram.action22')}</p></li>
                         <li><p><strong>{t('AffiliateProgram.action3')}</strong>{t('AffiliateProgram.action33')}</p></li>
                         <li><p><strong>{t('AffiliateProgram.action4')}</strong>{t('AffiliateProgram.action44')}</p></li>
                         <li><p><strong>{t('AffiliateProgram.action5')}</strong>{t('AffiliateProgram.action55')}</p></li>
                    </ul>
               </div>
          </section>
     );
};

export default Affiliate;
