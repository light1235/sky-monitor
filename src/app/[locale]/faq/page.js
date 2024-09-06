import React from 'react';
import './index.scss';
import FaqImage from '@/assets/main/images/faq.jpg';
import Image from "next/image";
import {useTranslations} from "next-intl";

const Faq = () => {
     const t = useTranslations();
     return (
          <section className="faq__page">
               <div className="page-container">
                    <Image src={FaqImage} alt="faq image"></Image>
                    <h1><strong>{t('FAQ.heading')}</strong></h1>
                    <h2>{t('FAQ.subHeading')}</h2>

                    <h3>{t('FAQ.whatIsHYIPTitle')}</h3>
                    <p>{t('FAQ.whatIsHYIPDesc')}</p>

                    <h3>{t('FAQ.howDoHYIPsEarnTitle')}</h3>
                    <p>{t('FAQ.howDoHYIPsEarnDesc')}</p>

                    <h3>{t('FAQ.howToMakeMoneyInHYIPsTitle')}</h3>
                    <p>{t('FAQ.howToMakeMoneyInHYIPsDesc')}</p>

                    <h3>{t('FAQ.riskOfLosingMoneyTitle')}</h3>
                    <p>{t('FAQ.riskOfLosingMoneyDesc')}</p>
                    <ul>
                         <li><p>{t('FAQ.riskFactor1')}</p></li>
                         <li><p>{t('FAQ.riskFactor2')}</p></li>
                         <li><p>{t('FAQ.riskFactor3')}</p></li>
                    </ul>

                    <h3>{t('FAQ.whatIsHYIPMonitoringTitle')}</h3>
                    <p>{t('FAQ.whatIsHYIPMonitoringDesc')}</p>

                    <h3>{t('FAQ.shouldTrustMonitoringTitle')}</h3>
                    <p>{t('FAQ.shouldTrustMonitoringDesc')}</p>

                    <h3>{t('FAQ.monitorsInvestOwnMoneyTitle')}</h3>
                    <p>{t('FAQ.monitorsInvestOwnMoneyDesc')}</p>

                    <h3>{t('FAQ.areMonitorsBribedByHYIPsTitle')}</h3>
                    <p>{t('FAQ.areMonitorsBribedByHYIPsDesc')}</p>

                    <h3>{t('FAQ.exampleOfProfitableHYIPTitle')}</h3>
                    <p>{t('FAQ.exampleOfProfitableHYIPDesc')}</p>

                    <h3>{t('FAQ.howToInvestInHYIPTitle')}</h3>
                    <p>{t('FAQ.howToInvestInHYIPDesc')}</p>
                    <ul>
                         <li><p><strong>{t('FAQ.investStep1')}</strong>{t('FAQ.investStep11')}</p></li>
                         <li><p><strong>{t('FAQ.investStep2')}</strong>{t('FAQ.investStep22')}</p></li>
                         <li><p><strong>{t('FAQ.investStep3')}</strong>{t('FAQ.investStep33')}</p></li>
                         <li><p><strong>{t('FAQ.investStep4')}</strong>{t('FAQ.investStep44')}</p></li>
                         <li><p><strong>{t('FAQ.investStep5')}</strong>{t('FAQ.investStep55')}</p></li>
                    </ul>

                    <h3>{t('FAQ.referralSystemTitle')}</h3>
                    <p>{t('FAQ.referralSystemDesc')}</p>

                    <h3>{t('FAQ.whatIsRCBTitle')}</h3>
                    <p>{t('FAQ.whatIsRCBDesc')}</p>

                    <h3>{t('FAQ.whatIsListingTitle')}</h3>
                    <p>{t('FAQ.whatIsListingDesc')}</p>
               </div>
          </section>
     );
};

export default Faq;
