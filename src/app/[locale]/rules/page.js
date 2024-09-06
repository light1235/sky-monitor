import React from 'react';
import './index.scss'
import Image from "next/image";
import RulesImage from '@/assets/main/images/rules-image-1.jpg'
import {useTranslations} from "next-intl";

const Rules = () => {
     const t = useTranslations();
     return (
          <section className="rules__page">
               <div className="page-container">
                    <Image src={RulesImage} alt="rules image"/>
                    <h1>{t('Rules.heading')}</h1>

                    <h3>{t('Rules.registrationTitle')}</h3>
                    <p>{t('Rules.registrationDesc')}</p>

                    <h3>{t('Rules.informationTitle')}</h3>
                    <p>{t('Rules.informationDesc')}</p>

                    <h3>{t('Rules.riskTitle')}</h3>
                    <p>{t('Rules.riskDesc')}</p>

                    <h3>{t('Rules.commentingTitle')}</h3>
                    <p>{t('Rules.commentingDesc')}</p>

                    <h3>{t('Rules.publishingTitle')}</h3>
                    <p>{t('Rules.publishingDesc')}</p>
               </div>
          </section>
     );
};

export default Rules;
