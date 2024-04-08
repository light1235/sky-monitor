"use client"
import React from 'react';
import  './index.scss'
import PartnersReview from "@/components/main/partners-review";
import DATAPARTNER from '../../db/partnersData.json';

const Partners = () => {

     return (
          <section className="partners__page">
               <div className="partners__page-container">
                    <div className="partners__page-content">
                         <h1>Our Partners</h1>
                         <div className="content-block">
                              {DATAPARTNER.map(item =>
                                   <PartnersReview item={item} key={item.id}/>
                              )}
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Partners;
