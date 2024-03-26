"use client"
import React from 'react';
import  './index.scss'
import PartnersReview from "@/components/main/partners-review";
import TestBlock from "@/components/main/test-block";
import DATAJSON from '../../assets/DataProjects.json';
import Listing_card from "@/components/main/listing_card";
import ContentBlock from "@/components/main/content-block";


const Partners = () => {

     const keys = Object.keys(DATAJSON.ListingData);

     return (
          <section className="partners__page">
               <div className="partners__page-container">
                    <div className="partners__page-content">
                         {/*{keys.map((key) =>*/}
                         {/*     <TestBlock item={DATAJSON.ListingData[key]} key={key} />*/}
                         {/*)}*/}
                         <h1>Our Partners</h1>
                         <div className="content-block">
                              <PartnersReview />
                              <PartnersReview />
                              <PartnersReview />
                              <PartnersReview />
                              <PartnersReview />
                              <PartnersReview />
                              <PartnersReview />
                              <PartnersReview />
                              <PartnersReview />
                              <PartnersReview />
                              <PartnersReview />
                              <PartnersReview />
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Partners;
