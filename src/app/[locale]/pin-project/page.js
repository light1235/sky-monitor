import React from 'react';
import './index.scss'
import Image from "next/image";
import ProjectPin from '@/assets/main/images/pin-project.jpg'
import {useTranslations} from "next-intl";

const PinProjectPackage = () => {

     const t = useTranslations();

     return (
          <div className="pin-project__page">
               <div className="page-container">
                    <h1>{t('NewsAnchoring.serviceHeader')}</h1>
                    <h3>{t('NewsAnchoring.serviceDescription')}</h3>
                    <Image src={ProjectPin} alt={t('NewsAnchoring.exampleImageAlt')}/>
                    <h3>{t('NewsAnchoring.benefitsHeader')}</h3>
                    <ul>
                         <li><p>{t('NewsAnchoring.benefit1')}</p></li>
                         <li><p>{t('NewsAnchoring.benefit2')}</p></li>
                         <li><p><strong>{t('NewsAnchoring.benefit3Strong')}</strong> {t('NewsAnchoring.benefit3')}</p>
                         </li>
                         <li><p><strong>{t('NewsAnchoring.benefit4Strong')}</strong> {t('NewsAnchoring.benefit4')}</p></li>
                         <li><p><strong>{t('NewsAnchoring.benefit5Strong')}</strong> {t('NewsAnchoring.benefit5')}</p></li>
                    </ul>
               </div>
          </div>
     );
};
export default PinProjectPackage;
