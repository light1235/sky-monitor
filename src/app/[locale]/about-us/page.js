import React from 'react';
import './index.scss'
import Image from "next/image";
import AboutImage from '@/assets/main/images/about-us-3.jpg'
import {useTranslations} from 'next-intl';

const AboutUs = () => {
  const t = useTranslations();

     return (
          <section className="about-us__page">
            <div className="page-container">
              <Image src={AboutImage} alt="about us image"></Image>
              <h1>{t('About.heading')}</h1>
              <p className="firstText">{t('About.firstText')}</p>

              <h3>{t('About.analyzingTitle')}</h3>
              <p>{t('About.analyzingDesc')}</p>

              <h3>{t('About.advisingTitle')}</h3>
              <p>{t('About.advisingDesc')}</p>

              <h3>{t('About.managementTitle')}</h3>
              <p>{t('About.managementDesc')}</p>

              <h3>{t('About.separatesTitle')}</h3>
              <p>{t('About.separatesDesc')}</p>

              <h3>{t('About.approachTitle')}</h3>
              <p>{t('About.approachDesc')}</p>

              <h2>{t('About.cryptoTitle')}</h2>
              <h3>{t('About.riseTitle')}</h3>
              <p>{t('About.riseDesc')}</p>

              <h3>{t('About.reportsTitle')}</h3>
              <p>{t('About.reportsDesc')}</p>

              <h3>{t('About.transparencyTitle')}</h3>
              <p>{t('About.transparencyDesc')}</p>

              <h3>{t('About.analystTitle')}</h3>
              <p>{t('About.analystDesc')}</p>

              <h3>{t('About.valueTitle')}</h3>
              <p>{t('About.valueDesc')}</p>

              <h2  className="border-h2" style={{
                padding: '40px 40px',
                border: '1px solid rgb(0 0 0 / 8%)',
                width: 'max-content',
                borderRadius: '10px'
              }}>
                <span>"</span><br/>
                <strong style={{fontWeight: '400'}}>{t('About.fraudTitle')}</strong>
                {t('About.fraudTitle0')}
              </h2>

              <h3>{t('About.fraudTitle1')}</h3>
              <p>{t('About.fraudDesc')}</p>

              <h3>{t('About.educationTitle')}</h3>
              <p>{t('About.educationDesc')}</p>

              <p>{t('About.commitment')}</p>

              <ul>
                <li><p><strong>{t('About.reliability')}</strong>{t('About.reliability1')}</p></li>
                <li><p><strong>{t('About.transparency')}</strong>{t('About.transparency1')}</p></li>
                <li><p><strong>{t('About.support')}</strong>{t('About.support1')}</p></li>
              </ul>


            </div>
          </section>
     );
};

export default AboutUs;
