import React from 'react';
import './index.scss'
import ListingImage from '/src/assets/main/images/listing-service.jpg'
import Image from "next/image";
import {useTranslations} from "next-intl";

const ListingPinPackage = () => {
     const t = useTranslations();
     return (
          <div className="listing-service__page">
               <div className="page-container">
                    <h1>{t('ListingPin.heading1')}</h1>
                    <h2>{t('ListingPin.heading2')}</h2>
                    <p>{t('ListingPin.paragraph1')}</p>
                    <Image src={ListingImage} alt={'example image'}/>
                    <h3>{t('ListingPin.heading3')}</h3>
                    <ul>
                         <li><p>{t('ListingPin.feature1')}</p></li>
                         <li><p>{t('ListingPin.feature2')}</p></li>
                         <li><p>{t('ListingPin.feature3')}</p></li>
                         <li><p>{t('ListingPin.feature4')}</p></li>
                    </ul>

                    <h3>{t('ListingPin.heading4')}</h3>
                    <ul>
                         <li><p>{t('ListingPin.advantage1')}</p></li>
                         <li><p>{t('ListingPin.advantage2')}</p></li>
                         <li><p>{t('ListingPin.advantage3')}</p></li>
                         <li><p>{t('ListingPin.advantage4')}</p></li>
                    </ul>

                    <h3>{t('ListingPin.result')}</h3>

                    <h3>{t('ListingPin.heading5')}</h3>
                    <ul>
                         <li><p>{t('ListingPin.step1')}</p></li>
                         <li><p>{t('ListingPin.step2')}</p></li>
                         <li><p>{t('ListingPin.step3')}</p></li>
                    </ul>

                    <h3>{t('ListingPin.heading6')}</h3>
                    <ul>
                         <li><p>{t('ListingPin.form1')}</p></li>
                         <li><p>{t('ListingPin.form2')}</p></li>
                         <li><p>{t('ListingPin.form3')}</p></li>
                         <li><p>{t('ListingPin.form4')}</p></li>
                         <li><p>{t('ListingPin.form5')}</p></li>
                         <li><p>{t('ListingPin.form6')}</p></li>
                         <li><p>{t('ListingPin.form7')}</p></li>
                    </ul>
               </div>
          </div>
     );
};

export default ListingPinPackage;
