'use client'
import React, {useState} from 'react';
import './index.scss';
import selectedImage1 from '/src/assets/main/images/selected-1.jpg';
import selectedImage2 from '/src/assets/main/images/selected-2.jpg';
import selectedImage3 from '/src/assets/main/images/selected-3.jpg';
import selectedImage4 from '/src/assets/main/images/selected-4.jpg';
import selectedImage5 from '/src/assets/main/images/selected-5.jpg';
import ArrowImage from '/src/assets/main/images/arrow-mario-2.jpg'
import Image from "next/image";
import CustomModal from "@/components/main/custom_modal";
import PopUpForm from "@/components/main/pop-up-form";
import BannerForm from "@/components/main/Banner_form";
import Link from "next/link";
import CustomToolTop from "@/components/main/tooltip_custom";

const SelectedPopUp = ({close}) => {
     const [active, setActive] = useState(2);
     const [showSelect, setShowSelect] = useState(false);
     const [clickCount, setClickCount] = useState(0);

     let popUps = ['listing',<BannerForm/>,<PopUpForm/>,'2','5'];

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
               <div className="item-title">choose the appropriate service</div>
               <div className="item-description">Choose from the selected:</div>
               <div className="item-wrapper">
                    <div className={active === 1 ? 'item-selected active-select' : ' item-selected'}
                         onClick={() => setActive(1)}>
                         <div className="decoration-item">
                              <div className="item-circle"></div>
                         </div>
                         <Image src={selectedImage1} alt="selected image"/>
                         <span>Listing</span>
                    </div>
                    <div className={active === 2 ? 'item-selected active-select' : ' item-selected'}
                         onClick={() => setActive(2)}>
                         <div className="decoration-item">
                              <div className="item-circle"></div>
                         </div>
                         <Image src={selectedImage2} alt="selected image"/>
                         <span>Banner</span>
                    </div>
                    <div className={active === 3 ? 'item-selected active-select' : ' item-selected'}
                         onClick={() => setActive(3)}>
                         <div className="decoration-item">
                              <div className="item-circle"></div>
                         </div>
                         <Image src={selectedImage3} alt="selected image"/>
                         <span>Pop-Up</span>
                    </div>
                    <div className={active === 4 ? 'item-selected active-select' : ' item-selected'}
                         onClick={() => setActive(4)}>
                         <div className="decoration-item">
                              <div className="item-circle"></div>
                         </div>
                         <Image src={selectedImage4} alt="selected image"/>
                         <span>Pin&Raise</span>
                    </div>
                    <div className={active === 5 ? 'item-selected active-select' : ' item-selected'}
                         onClick={() => setActive(5)}>
                         <div className="decoration-item">
                              <div className="item-circle"></div>
                         </div>
                         <Image src={selectedImage5} alt="selected image"/>
                         <span>Article</span>
                    </div>
                    <div className="item-selected item-arrow">
                         <Link href="/services" onClick={close}>
                              <CustomToolTop text={'Services Description'}>
                         <Image src={ArrowImage} alt="selected image"/>
                              </CustomToolTop>
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
