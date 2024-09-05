import React from 'react';
import './index.scss'
import SupportImage from '@/assets/main/images/support.jpg';
import Image from "next/image";
import {useTranslations} from 'next-intl';
export const metadata = {
     title: 'Заголовок страницы',
     description: 'Описание страницы',
};

const SupportPage = () => {
     const t = useTranslations();
     return (
          <>
               <section className="support__page">
                    <div className="page-container">
                         <Image src={SupportImage} alt="support image"></Image>
                         <h1>{t('Support.title')}</h1>
                         {/*<h2> How Can We Assist You Today?</h2>*/}
                         <h2>{t('Support.description')}</h2>
                         <p>{t('Support.p')}</p>
                         <h2>{t('Support.title1')}</h2>
                         <h3>{t('Support.description1')}</h3>
                         <p>{t('Support.p1')}</p>
                         <h2>{t('Support.title2')}</h2>
                         <h3>{t('Support.description2')}</h3>
                         <p>{t('Support.p2')}<strong>{t('Support.p22')}</strong></p>
                         <h2>{t('Support.title3')}</h2>
                         <h3>{t('Support.description3')}</h3>
                         <p>{t('Support.p3')}</p>
                         <p>{t('Support.p33')}</p>
                         <p>{t('Support.p333')}</p>
                         <h2>{t('Support.title4')}</h2>
                         <p>{t('Support.p4')}</p>
                         <p>{t('Support.p44')}</p>
                         <p>{t('Support.p444')}</p>
                         <h2>{t('Support.title5')}</h2>
                         <p>{t('Support.p5')}</p>
                         <p>{t('Support.p6')}</p>
                         <h3>{t('Support.title6')}</h3>
                    </div>
               </section>
          </>

     );
};

export default SupportPage;
