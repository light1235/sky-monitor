"use client"
import React from 'react';
import  './index.scss'
import PartnersReview from "@/components/main/partners-review";
import {useGetPartnersQuery} from "@/services/partnersApi";

const Partners = () => {

     const { data : partners = [], error: partnersError, isLoading: partnersLoading } = useGetPartnersQuery(undefined, {
          pollingInterval: 60000,
          refetchOnMountOrArgChange: true,
          refetchOnReconnect: true,
     });

     const partnerItems = [...partners].reverse();

     return (
          <section className="partners__page">
               <div className="partners__page-container">
                    <div className="partners__page-content">
                         <h1>Our Partners</h1>
                         <div className="content-block">
                              {partnerItems.map(item =>
                                   <PartnersReview item={item} key={item.id}/>
                              )}
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Partners;
