'use client'
import React, {useState} from 'react';
import './index.scss';
import selectedImage1 from '/src/assets/main/images/selected-1.jpg';
import selectedImage2 from '/src/assets/main/images/selected-2.jpg';
import selectedImage3 from '/src/assets/main/images/selected-3.jpg';
import selectedImage4 from '/src/assets/main/images/selected-4.jpg';
import selectedImage5 from '/src/assets/main/images/selected-5.jpg';
import ArrowImage from '/src/assets/main/images/arrow-mario-6.jpg'
import Image from "next/image";
import CustomModal from "@/components/main/custom_modal";
import PopUpForm from "@/components/main/pop-up-form";
import BannerForm from "@/components/main/Banner_form";
import {Link} from '@/i18n/routing.public'
import CustomToolTop from "@/components/main/tooltip_custom";
import PinRaiseForm from "@/components/main/pin-raise-form";
import ArticleForm from "@/components/main/article-form";
import {useTranslations} from 'next-intl';
import ListingForm from "@/components/main/listing-form";


const SelectedPopUp = ({close}) => {
     const [active, setActive] = useState(2);
     const [showSelect, setShowSelect] = useState(false);
     const [clickCount, setClickCount] = useState(0);

     const t = useTranslations();

     let popUps = [<ListingForm/>,<BannerForm/>,<PopUpForm/>,<PinRaiseForm />,<ArticleForm />];

     const SelectService = () => {
          close();
          if (clickCount === 0) {
               setTimeout(() => {
                    setShowSelect(!showSelect);
               }, 700);
          } else {
               setShowSelect(!showSelect);
          }
          setClickCount(clickCount + 1);
     };

     return (
          <div className="pop-up-item">
               <div className="item-bottom">
                    <div className="bottom-inner">
                         <div className="close-button" onClick={close}>
                              <div className="top-stick"></div>
                              <div className="bottom-stick"></div>
                         </div>
                    </div>
               </div>
               <div className="item-title">{t('header.popUp.title')}</div>
               <div className="item-description">{t('header.popUp.description')}</div>
               <div className="item-wrapper">
                    <div className={active === 1 ? 'item-selected active-select' : ' item-selected'}
                         onClick={() => setActive(1)}>
                         <div className="decoration-item">
                              <div className="item-circle"></div>
                         </div>
                         <Image placeholder="blur" priority={true} src={selectedImage1} alt="selected image"/>
                         <span>{t('header.popUp.listing')}</span>
                    </div>
                    <div className={active === 2 ? 'item-selected active-select' : ' item-selected'}
                         onClick={() => setActive(2)}>
                         <div className="decoration-item">
                              <div className="item-circle"></div>
                         </div>
                         <Image placeholder="blur" priority={true} src={selectedImage2} alt="selected image"/>
                         <span>{t('header.popUp.banner')}</span>
                    </div>
                    <div className={active === 3 ? 'item-selected active-select' : ' item-selected'}
                         onClick={() => setActive(3)}>
                         <div className="decoration-item">
                              <div className="item-circle"></div>
                         </div>
                         <Image  placeholder="blur" priority={true} src={selectedImage3} alt="selected image"/>
                         <span>{t('header.popUp.popUp')}</span>
                    </div>
                    <div className={active === 4 ? 'item-selected active-select' : ' item-selected'}
                         onClick={() => setActive(4)}>
                         <div className="decoration-item">
                              <div className="item-circle"></div>
                         </div>
                         <Image placeholder="blur" priority={true} src={selectedImage4} alt="selected image"/>
                         <span>{t('header.popUp.pin')}</span>
                    </div>
                    <div className={active === 5 ? 'item-selected active-select' : ' item-selected'}
                         onClick={() => setActive(5)}>
                         <div className="decoration-item">
                              <div className="item-circle"></div>
                         </div>
                         <Image placeholder="blur" priority={true} src={selectedImage5} alt="selected image"/>
                         <span>{t('header.popUp.article')}</span>
                    </div>
                    <div className="item-selected item-arrow">
                         <Link href="/services" onClick={close}>
                              {/*<CustomToolTop text={'Services Description'}>*/}
                         <Image placeholder="blur" priority={true} src={ArrowImage} alt="selected image"/>
                              {/*</CustomToolTop>*/}
                         </Link>
                    </div>
                    <div className="bottom-line-items">

                    </div>
               </div>
               <div className="button-wrapper">
                    <button onClick={SelectService} className="selected-button">Select</button>
               </div>
               <CustomModal open={showSelect} close={SelectService}>{popUps[active - 1]}</CustomModal>
          </div>
     );
};

export default SelectedPopUp;
