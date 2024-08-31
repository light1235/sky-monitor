import React from 'react';
import './index.scss'
import Image from "next/image";
import RulesImage from '@/assets/main/images/rules-image-1.jpg'

const Rules = () => {
     return (
          <section className="rules__page">
               <div className="page-container">
                    <Image src={RulesImage} alt="rules image"/>
                    <h1>Rules for using</h1>
                    <h3>Registration and Account</h3>
                    <p> Users have to register and create an account at the display to advantage get entry to to all features and functions of the platform.</p>
                    <h3>Information about tasks</h3>
                    <p> The display offers information approximately diverse hype projects, their conditions and scores. Users can use this records to make funding selections.</p>
                    <h3>Risk Analysis</h3>
                    <p>Users must independently determine the dangers and reliability of every HYIP venture before investing. The display presents data, but isn't chargeable for possible losses.</p>
                    <h3>Commenting Rules</h3>
                    <p>Users can go away comments and reviews approximately hype initiatives at the display, however have to adhere to the guidelines of civilized conversation and no longer spoil legal guidelines.</p>
                    <h3>Publishing hyperlinks and referral codes</h3>
                    <p>Publishing referral hyperlinks and codes in remarks or critiques may be prohibited relying on the display's guidelines.</p>
               </div>
          </section>
     );
};

export default Rules;
