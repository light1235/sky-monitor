import React from 'react';
import './index.scss'
import Image from "next/image";
import partnersImage from "@/assets/main/images/partners-image.jpg";
import Link from "next/link";

const PartnersReview = () => {
     return (
          <div className="partners-review-item">
               <div className="item-image"><Image src={partnersImage} alt='partners image'/></div>
               <div className="item-text-wrapper">
                    <div className="item-title"><Link href='/' rel="nofollow">Invest-tracing.com</Link></div>
                    <div className="item-description">Lorem Ipsum is simply dummy text of the printing and typesetting
                         industry. Lorem Ipsum has been the industry's standard sadadasdasdsa sadasdasdsadasdasda asd
                         asd as as asd asdsadadsa sadada asd asdasdasd sadada rora oraor a
                    </div>
               </div>
          </div>
     );
};

export default PartnersReview;
// <Link rel="nofollow" href="/">
