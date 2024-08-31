import React from 'react';
import  './index.scss'
import PartnersReview from "@/components/main/partners-review";
import getPartners from '../../../services/partnersApi'

export const metadata = {
     title: 'Sky Finance - Expert in investments',
     description: 'Explore our network of trusted partners driving financial success together',
};

const Partners = async () => {

     const dataPartners = await getPartners();

     return (
          <>
               <head>
                    <meta name="description" content="Explore our network of trusted partners driving financial success together"/>
               </head>
               <section className="partners__page">
                    <div className="partners__page-container">
                         <div className="partners__page-content">
                              <h1>Our Partners</h1>
                              <div className="content-block">
                                   {dataPartners.map(item =>
                                        <PartnersReview item={item} key={item.id}/>
                                   )}
                              </div>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default Partners;
