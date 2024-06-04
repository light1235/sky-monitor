import React from 'react';
import './index.scss'
import Image from "next/image";

const UserPopUp = () => {
     return (
          <div className="pop-up-element">
               <div className="element-close">
                    <div className="close-circle"></div>
               </div>
               <Image src="" alt="pop-up image"/>
               <div className="element-title">Scam detected!</div>
               <div className="element-description">We noticed that you may have an
                    Bitmugnet  is Scam</div>
          </div>
     );
};

export default UserPopUp;
