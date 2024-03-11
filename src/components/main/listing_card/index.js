import React from 'react';
import './index.scss'
import Image from "next/image";
import projectImage from '/src/assets/main/images/project-image.png';
import bitcoinLogo from '/src/assets/main/icons/payments-system/bitcoin.svg';
import simillarWeb from '/src/assets/main/icons/simillar-web.svg';
import whoIs from '/src/assets/main/icons/who-is.svg';

const ListingCard = () => {
     return (
          <div className="listing__card">
               <div className="card-top_line">
                    <div className="program_name">BitMugnet</div>
                    <div className="program_details"><div className="details-button"></div></div>
               </div>
               <div className="card-middle_line">
                    <div className="left_side">
                         <Image src={projectImage} width="124" height="124" ></Image>
                         <div className="content_wrapper">
                              <div className="content-items status">Status:<span> Paying</span></div>
                              <div className="content-items">Our investments:<span> 400$</span></div>
                              <div className="content-items">Payout rate:<span> 1033$</span></div>
                              <div className="content-items">Last paid: <span> June 25st 2017</span></div>
                              <div className="content-items">Created:<span> Jule 25st  2016</span></div>
                              <div className="content-items">Minimal spend: <span> 10$</span></div>
                              <div className="content-items">Withdrawal:<span> automatic</span></div>
                              <div className="content-items">Days online :<span> 125</span></div>
                         </div>
                    </div>
                    <div className="right_side">
                         <div className="description">Accepted:</div>
                         <div className="payments-system">
                              <Image src={bitcoinLogo} height="20" width="20"/>
                              <Image src={bitcoinLogo} height="20" width="20"/>
                              <Image src={bitcoinLogo} height="20" width="20"/>
                              <Image src={bitcoinLogo} height="20" width="20"/>
                              <Image src={bitcoinLogo} height="20" width="20"/>
                              <Image src={bitcoinLogo} height="20" width="20"/>
                         </div>
                         <div className="info">Info</div>
                         <div className="project-info">
                              <Image src={simillarWeb} height="20" width="20"/>
                              <Image src={whoIs} height="20" width="20"/>
                         </div>
                    </div>
               </div>
               <div className="card-bottom_line">3</div>
          </div>
     );
};

export default ListingCard;
