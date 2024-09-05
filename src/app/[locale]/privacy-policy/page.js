import React from 'react';
import './index.scss'
import {useTranslations} from 'next-intl';


const PrivacyPolicy = () => {
     const t = useTranslations();
     return (
          <section className="policy__page">
               <div className="page-container">
               <h1>{t('PrivacyPolicy.h1')}</h1>
               <h2>{t('PrivacyPolicy.h2')}</h2>
               <h3>{t('PrivacyPolicy.title')}</h3>
               <p>{t('PrivacyPolicy.description')}</p>
               <h3>{t('PrivacyPolicy.title1')}</h3>
               <p>{t('PrivacyPolicy.description1')}</p>
               <h3>{t('PrivacyPolicy.title2')}</h3>
               <p>{t('PrivacyPolicy.description2')}
               </p>
               <h3>{t('PrivacyPolicy.title3')}</h3>
               <p>{t('PrivacyPolicy.description3')}</p>
               <h3>{t('PrivacyPolicy.title4')}</h3>
               <p> {t('PrivacyPolicy.description4')}</p>
               <h3>{t('PrivacyPolicy.title5')}</h3>
               <p>{t('PrivacyPolicy.description5')}
               </p>
               </div>
          </section>
     );
};

export default PrivacyPolicy;
