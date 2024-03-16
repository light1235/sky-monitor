import React from 'react';
import  './index.scss'
import PartnersReview from "@/components/main/partners-review";

const Partners = () => {
     return (
          <section className="partners__page">
               <div className="partners__page-container">
                    <div className="partners__page-content">
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
