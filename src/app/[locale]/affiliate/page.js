import React from 'react';
import './index.scss'
import AffImage from '@/assets/main/images/socia-1.jpg';
import Image from "next/image";

const Affiliate = () => {
     return (
          <section className="affiliate__page">
               <div className="page-container">
                    <Image src={AffImage} alt="aff image"/>
                    <h1><strong>Welcome to our affiliate program!</strong></h1>
                    <h2>We are pleased to offer you the opportunity to join our affiliate program and start earning with
                         us.</h2>
                    <p>Our program is designed to provide our partners with the most favorable conditions of
                         cooperation.</p>
                    <p>If you are in the initial period of promotion, you have insufficient funds and no possibility to
                         promote your investment product but you want to be placed on our monitor in the Trial
                         section. </p>
                    <h3>We offer you to do a number of simple actions after which you will be placed on our
                         project. </h3>
                    <ul>
                         <li><p><strong>Post</strong> to your social media accounts </p></li>
                         <li><p><strong>Leave a comment</strong> in our forum thread </p></li>
                         <li><p><strong>Subscribe</strong> to our telegram channel</p></li>
                         <li><p><strong>Subscribe</strong> on social networks </p></li>
                         <li><p><strong>Post 1 video</strong> on Tik Tok about our monitor</p></li>
                    </ul>
               </div>
          </section>
     );
};

export default Affiliate;
