"use client"
import React from 'react';
import Listing_card from "@/components/main/listing_card";
import './index.scss'
import BannerImage from '../../../assets/main/images/content-banner.jpg';
import Image from "next/image";
import DATAJSON from '../../../assets/DataProjects.json'
import Link from "next/link";

const ContentBlock = () => {

     const keys = Object.keys(DATAJSON.ListingData);

     return (
          <div className="content__block">
               <div className="content-list-items">
                    {keys.map((key) =>
                         <Listing_card item={DATAJSON.ListingData[key]} key={key} />
                    )}

               </div>
               <div className="content-banners">
                    <Link target="_blank" href="https://espino.ltd/">
                    <Image width="615" height="90" src="https://cdn.discordapp.com/attachments/1046398987659395152/1222300614822858975/lapaido728e.gif?ex=6615b727&is=66034227&hm=ea9ab7c7d1c08748dcbafddd521bb9847edd1996174f957e9bff84bc98d76c6a&" alt='banner-image' />
                    </Link>
                    <Link target="_blank" href="https://wizerpeople.com/"> <Image width="615" height="90" src="https://cdn.discordapp.com/attachments/1046398987659395152/1222301455751450727/hyiproom468ee.gif?ex=6615b7f0&is=660342f0&hm=08e151b28c710eda72999109636b1831e8100e76e633f505b2f1a6a9d2fd7063&" alt='banner-image' /></Link>
               </div>
          </div>
     );
};

export default ContentBlock;
