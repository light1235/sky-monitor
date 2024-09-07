import React from 'react';
import './index.scss'
import Image from "next/image";
import ListingImage from "@/assets/main/images/listing-service.jpg";
import {useTranslations} from "next-intl";

const ListingRaisePackage = () => {

     const t = useTranslations();

     return (
          <div className="listing-raise__page">
               <div className="page-container">
                    <h1>{t('RaiseService.serviceHeader')}</h1>
                    <h2>{t('RaiseService.howItWorksHeader')}</h2>
                    <p>{t('RaiseService.howItWorksDescription')}</p>
                    <Image src={ListingImage} alt={'example image'}/>
                    <h3>{t('RaiseService.featuresHeader')}</h3>
                    <ul>
                         <li><p>{t('RaiseService.feature1')}</p></li>
                         <li><p>{t('RaiseService.feature2')}</p></li>
                    </ul>
                    <h3>{t('RaiseService.advantagesHeader')}</h3>
                    <ul>
                         <li><p><strong>{t('RaiseService.advantage1Strong')}</strong> {t('RaiseService.advantage1')}</p>
                         </li>
                         <li><p><strong>{t('RaiseService.advantage2Strong')}</strong> {t('RaiseService.advantage2')}</p>
                         </li>
                         <li><p><strong>{t('RaiseService.advantage3Strong')}</strong> {t('RaiseService.advantage3')}</p>
                         </li>
                    </ul>
                    <h3>{t('RaiseService.resultDescription')}</h3>
                    <h3>{t('RaiseService.purchaseStepsHeader')}</h3>
                    <ul>
                         <li><p>{t('RaiseService.step1')}</p></li>
                         <li><p>{t('RaiseService.step2')}</p></li>
                         <li><p>{t('RaiseService.step3')}</p></li>
                    </ul>
                    <h3>{t('RaiseService.formFillingHeader')}</h3>
                    <ul>
                         <li><p>{t('RaiseService.formStep1')}</p></li>
                         <li><p>{t('RaiseService.formStep2')}</p></li>
                         <li><p>{t('RaiseService.formStep3')}</p></li>
                         <li><p>{t('RaiseService.formStep4')}</p></li>
                         <li><p>{t('RaiseService.formStep5')}</p></li>
                         <li><p>{t('RaiseService.formStep6')}</p></li>
                    </ul>
               </div>
          </div>
     );
};

export default ListingRaisePackage;
