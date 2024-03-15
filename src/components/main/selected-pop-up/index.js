'use client'
import React, {useState} from 'react';
import './index.scss';
import selectedImage1 from '/src/assets/main/images/selected-1.jpg';
import selectedImage2 from '/src/assets/main/images/selected-2.jpg';
import selectedImage3 from '/src/assets/main/images/selected-3.jpg';
import Image from "next/image";

const SelectedPopUp = ({close}) => {
     const [active, setActive] = useState(2);

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
                    <div className={active === 1 ? 'item-selected active-select' : ' item-selected'} onClick={()=> setActive(1)}>
                         <div className="decoration-item"><div className="item-circle"></div></div>
                         <Image src={selectedImage1} alt="selected image"/>
                         <span>Listing</span>
                    </div>
                    <div className={active === 2 ? 'item-selected active-select' : ' item-selected'} onClick={()=> setActive(2)}>
                         <div className="decoration-item">
                              <div className="item-circle"></div>
                         </div>
                         <Image src={selectedImage2} alt="selected image"/>
                         <span>Banner</span>
                    </div>
                    <div className={active === 3 ? 'item-selected active-select' : ' item-selected'} onClick={()=> setActive(3)}>
                         <div className="decoration-item">
                              <div className="item-circle"></div>
                         </div>
                         <Image src={selectedImage3} alt="selected image"/>
                         <span>Pop-Up</span>
                    </div>
               </div>
               <div className="button-wrapper">
               <button className="selected-button">Select</button>
               </div>
          </div>
     );
};

export default SelectedPopUp;
