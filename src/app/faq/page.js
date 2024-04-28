import React from 'react';
import './index.scss';
import FaqImage from '../../assets/main/images/faq.jpg';
import Image from "next/image";

const Faq = () => {
     return (
          <section className="faq__page">
               <div className="page-container">
                    <Image src={FaqImage} alt="faq image"></Image>
               </div>
          </section>
);
};

export default Faq;
