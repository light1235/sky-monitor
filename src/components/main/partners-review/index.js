"use client"
import React from 'react';
import './index.scss'
import Image from "next/image";
import partnersImage from "@/assets/main/images/partners-image.jpg";
import Link from "next/link";

const PartnersReview = ({item}) => {
     return (
          <div className="partners-review-item">
               <div className="item-image"><Image src={partnersImage} alt='partners image'/></div>
               <div className="item-text-wrapper">
                    <div className="item-title"><Link href='/' rel="nofollow">{item.title}</Link></div>
                    <div className="item-description">{item.description}
                    </div>
               </div>
          </div>
     );
};

export default PartnersReview;
