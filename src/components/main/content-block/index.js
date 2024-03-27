"use client"
import React, {useEffect, useState} from 'react';
import Listing_card from "@/components/main/listing_card";
import './index.scss'
import BannerImage from '../../../assets/main/images/content-banner.jpg';
import Image from "next/image";
import DATAJSON from '../../../assets/DataProjects.json'
import Link from "next/link";
import Listing_card_mobile from "@/components/main/listing_card_mobile";

const ContentBlock = ({items}) => {
     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

     useEffect(() => {
          const handleResize = () => {
               setWindowWidth(window.innerWidth);
          };

          // window.addEventListener('resize', handleResize);
          // return () => {
          //      window.removeEventListener('resize', handleResize);
          // };
     }, [windowWidth]);



     const keys = Object.keys(DATAJSON.ListingData);


     return (
          <div className="content__block">
               <div className="content-list-items">
                    {items.map((item, index) => (
                         // console.log(item)
                         windowWidth > 1400 ? (
                              <Listing_card  key={index} item={item} />
                         ) : (
                              <Listing_card_mobile  key={index} item={item} />
                         )
                    ))}
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
