import React from 'react';
import './index.scss'
import Image from "next/image";
import contactPageImage from '/src/assets/main/images/contanct-page.svg'

export const metadata = {
     title: 'Sky Finance - Expert in investments',
     description: 'Reach out to us for personalized financial guidance and assistance',
};

const Contacts = () => {
     return (
               <section className="contact__page">
                    <div className="contact__page-container">
                         <div className="contact__page-content">
                              <h1>Support@sky-finance.com</h1>
                              <h2>You can always write to our technical support on questions of interest to you.
                                   As well as suggestions for improving our service.</h2>
                              <Image src={contactPageImage} alt='contact image'/>
                         </div>
                    </div>
               </section>
     );
};

export default Contacts;