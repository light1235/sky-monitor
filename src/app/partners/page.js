"use client"
import React from 'react';
import  './index.scss'
import PartnersReview from "@/components/main/partners-review";
import DATAJSON from '../../assets/DataProjects.json';
import DATAPARTNER from '../../assets/DataPartners.json';

const Partners = () => {

     const keys = Object.keys(DATAJSON.ListingData);
     return (
          <section className="partners__page">
               <div className="partners__page-container">
                    <div className="partners__page-content">
                         {/*{keys.map((key) =>*/}
                         {/*     // <TestBlock item={keys[key]} key={key} />*/}
                         {/*     console.log( key)*/}
                         {/*)}*/}
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
