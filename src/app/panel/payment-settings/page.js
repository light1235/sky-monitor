"use client"
import React, {useEffect, useState} from 'react';
import "./index.scss";
import PaymentInput from "@/components/main/payment-input";
import Telegram from '../../../assets/main/icons/youtube-white.svg';
import YouTube from '../../../assets/main/icons/telegram-white.svg';
import Tiktok from '../../../assets/main/icons/tik-tok-white.svg';
import Image from "next/image";
const PaymentSettings = () => {
     const [socialData, setSocialData] = useState({
          teleGram: 't.me/skyFinance',
          youTube: 'asdasd',
          TikTok:'',
     });

     const [paymentData, setPaymentData] = useState({
          elite: '',
          exclusive: '',
          premium:'',
          normal:'',
          trial:'',
          headerBanner:'',
          listingBanner:'',
          pinListing:'',
          pinNews:'',
          raise:'',
          popUp:''
     });


     useEffect(() => {
        console.log(socialData);
     }, [socialData]);
     useEffect(() => {
          console.log(paymentData);
     }, [paymentData]);



     const handleSocialDataChange = (key, value) => {
          setSocialData((prevData) => ({
               ...prevData,
               [key]: value,
          }));
     };
     const handlePaymentDataChange = (key, value) => {
          setPaymentData((prevData) => ({
               ...prevData,
               [key]: value,
          }));
     };

     return (
          <div className="payment__page">
               <div className="panel-block">
                    <div className="social-name">
                         <h2>Social Links</h2>
                         <p>Add links to app</p>
                    </div>
                    <div className="social-line">
                         <div className="line-circle"><Image src={Telegram} alt="telega"/></div>
                         <PaymentInput
                              dataKey="teleGram"
                              data={socialData.teleGram}
                              onPaymentDataChange={handleSocialDataChange}
                         />
                    </div>
                    <div className="social-line">
                         <div className="line-circle"><Image src={YouTube} alt="telega"/></div>
                         <PaymentInput
                              dataKey="youTube"
                              data={socialData.youTube}
                              onPaymentDataChange={handleSocialDataChange}
                         />
                    </div>
                    <div className="social-line">
                         <div className="line-circle"><Image src={Tiktok} alt="telega"/></div>
                         <PaymentInput
                              dataKey="TikTok"
                              data={socialData.TikTok}
                              onPaymentDataChange={handleSocialDataChange}
                         />
                    </div>

               </div>
               <div className="panel-block" style={{justifySelf: 'end'}}>
                    <div className="social-name">
                         <h2>Services</h2>
                         <p>Setting prices for services</p>
                    </div>
                    <div className="items-line">
                         <p>Elite</p>
                         <PaymentInput
                              dataKey="elite"
                              data={paymentData.elite}
                              onPaymentDataChange={handlePaymentDataChange}
                         />
                    </div>
                    <div className="items-line">
                         <p>Exclusive</p>
                         <PaymentInput
                              dataKey="exclusive"
                              data={paymentData.exclusive}
                              onPaymentDataChange={handlePaymentDataChange}
                         />
                    </div>
                    <div className="items-line">
                         <p>Premium</p>
                         <PaymentInput
                              dataKey="premium"
                              data={paymentData.premium}
                              onPaymentDataChange={handlePaymentDataChange}
                         />
                    </div>
                    <div className="items-line">
                         <p>Normal</p>
                         <PaymentInput
                              dataKey="normal"
                              data={paymentData.normal}
                              onPaymentDataChange={handlePaymentDataChange}
                         />
                    </div>
                    <div className="items-line">
                         <p>Trial</p>
                         <PaymentInput
                              dataKey="trial"
                              data={paymentData.trial}
                              onPaymentDataChange={handlePaymentDataChange}
                         />
                    </div>
                    <div className="social-name" style={{marginTop: '40px'}}>
                         <h2>Banners</h2>
                    </div>
                    <div className="items-line">
                         <p>Header banner</p>
                         <PaymentInput
                              dataKey="headerBanner"
                              data={paymentData.headerBanner}
                              onPaymentDataChange={handlePaymentDataChange}
                              daysInput={true}
                              daysPlaceholder={'7'}
                         />
                    </div>
                    <div className="items-line">
                         <p>Listing banner</p>
                         <PaymentInput
                              dataKey="listingBanner"
                              data={paymentData.listingBanner}
                              onPaymentDataChange={handlePaymentDataChange}
                              daysInput={true}
                              daysPlaceholder={'7'}
                         />
                    </div>
                    <div className="social-name" style={{marginTop: '40px'}}>
                         <h2>Advanced services</h2>
                    </div>
                    <div className="items-line">
                         <p>Pin listing in top category and overview only for (premium listing) for days</p>
                         <PaymentInput
                              dataKey="pinListing"
                              data={paymentData.pinListing}
                              onPaymentDataChange={handlePaymentDataChange}
                              daysInput={true}
                              daysPlaceholder={'7'}
                         />
                    </div>
                    <div className="items-line">
                         <p>Pin news about the project to the top of the news feed for days</p>
                         <PaymentInput
                              dataKey="pinNews"
                              data={paymentData.pinNews}
                              onPaymentDataChange={handlePaymentDataChange}
                              daysInput={true}
                              daysPlaceholder={'7'}
                         />
                    </div>
                    <div className="items-line">
                         <p>Raising the listing (premium, normal)</p>
                         <PaymentInput
                              dataKey="raise"
                              data={paymentData.raise}
                              onPaymentDataChange={handlePaymentDataChange}
                         />
                    </div>
                    <div className="social-name" style={{marginTop: '40px'}}>
                         <h2>Pop up window</h2>
                    </div>
                    <div className="items-line">
                         <p>Advertising popup for all users, one time for days</p>
                         <PaymentInput
                              dataKey="popUp"
                              data={paymentData.popUp}
                              onPaymentDataChange={handlePaymentDataChange}
                              daysInput={true}
                              daysPlaceholder={'2'}
                         />
                    </div>
               </div>

          </div>
     );
};

export default PaymentSettings;
