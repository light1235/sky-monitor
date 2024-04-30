import React from 'react';
import './index.scss'
import AffImage from '../../assets/main/images/socia-1.jpg';
import Image from "next/image";

const Affiliate = () => {
     return (
          <section className="affiliate__page">
               <div className="page-container">
                    <Image src={AffImage} alt="aff image"/>
               </div>
          </section>
     );
};

export default Affiliate;
