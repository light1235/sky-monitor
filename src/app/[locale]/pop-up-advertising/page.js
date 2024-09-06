import React from 'react';
import './index.scss'
import PopUpImage from '@/assets/main/images/pop-up-service.jpg'
import Image from "next/image";
import {useTranslations} from "next-intl";

const PopUpPackages  = () => {
     const t = useTranslations();
     return (
          <div className="pop-up-service__page">
               <div className="page-container">
                    <h1><strong>{t('PopupBanner.heading')}</strong></h1>
                    <h3>{t('PopupBanner.subHeading')}</h3>

                    <Image src={PopUpImage} alt={'example image'}/>
                    <p>{t('PopupBanner.popupDescription')}</p>

                    <h3>{t('PopupBanner.whatToDoTitle')}</h3>
                    <ul>
                         <li><p>{t('PopupBanner.steps.step1')}</p></li>
                         <li><p>{t('PopupBanner.steps.step2')}</p></li>
                         <li><p>{t('PopupBanner.steps.step3')}</p></li>
                    </ul>

                    <h3>{t('PopupBanner.formFillingTitle')}</h3>
                    <ul>
                         <li><p>{t('PopupBanner.formFilling.step1')}</p></li>
                         <li><p>{t('PopupBanner.formFilling.step2')}</p></li>
                         <li><p>{t('PopupBanner.formFilling.step3')}</p></li>
                         <li><p>{t('PopupBanner.formFilling.step4')}</p></li>
                         <li><p>{t('PopupBanner.formFilling.step5')}</p></li>
                         <li><p>{t('PopupBanner.formFilling.step6')}</p></li>
                         <li><p>{t('PopupBanner.formFilling.step7')}</p></li>
                         <li><p>{t('PopupBanner.formFilling.step8')}</p></li>
                    </ul>
               </div>
          </div>
     );
};

export default PopUpPackages;
