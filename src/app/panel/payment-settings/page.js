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
          teleGram: '',
          youTube: '',
          TikTok:'',
     });

     const [paymentData, setPaymentData] = useState({
          elite: '',
          exclusive: '',
          premium:'',
          normal:'',
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
               </div>

          </div>
     );
};

export default PaymentSettings;
