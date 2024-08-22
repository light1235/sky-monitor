"use client"
import React, {useEffect, useState} from 'react';
import Listing_card from "@/components/main/listing_card";
import './index.scss'
import Listing_card_mobile from "@/components/main/listing_card_mobile";
import ContentBanner from "@/components/main/content-banner";
import Listing_card_free from "@/components/main/listing_card_free";
import Listing_card_mobile_free from "@/components/main/listing_card_mobile_free";

const ContentBlock = ({items}) => {

     const RandomBanner = [{banner:'https://cdn.discordapp.com/attachments/1276295653558976594/1276301980528152689/492.gif?ex=66c90858&is=66c7b6d8&hm=d9dde1b7b3b9a99d1608649dc59c2194cfc0564ee8cad1275904aa1ec3c68786&',url:'https://google.com'},{banner:'https://cdn.discordapp.com/attachments/1276295653558976594/1276302001881485332/493.gif?ex=66c9085d&is=66c7b6dd&hm=12dd88deeb256fee9be5286023f3d7fb2f2f519e422c6d16a1d6a2b6c462efc2&',url:'https://www.facebook.com/'},{banner:'https://cdn.discordapp.com/attachments/1276295653558976594/1276302208656211989/489.gif?ex=66c9088f&is=66c7b70f&hm=e3c9a73c9c02768051482b3c2f01bbe105f96de03da634b867e5cfc24f3ef80b&',url:'https://www.instagram.com/'},{banner:'https://cdn.discordapp.com/attachments/1276295653558976594/1276303491048149073/lapaido728e.gif?ex=66c909c0&is=66c7b840&hm=8e641bfc1712a1153c2618cae190ffe28c18f1d5302ef1c9f73a469c84ef7c61&',url:'https://www.zfort.com.ua/'},{banner:'https://cdn.discordapp.com/attachments/1276295653558976594/1276303518809980969/hyiproom468ee.gif?ex=66c909c7&is=66c7b847&hm=b8bf282c14e986b6196aad9eb10e0950b1af89e4bcd7e8f87ee39618cb9557a6&',url:'https://betravis.github.io/shape-tools/path-to-polygon/'},{banner:'https://cdn.discordapp.com/attachments/1276295653558976594/1276301980528152689/492.gif?ex=66c90858&is=66c7b6d8&hm=d9dde1b7b3b9a99d1608649dc59c2194cfc0564ee8cad1275904aa1ec3c68786&',url:'http://phrogz.net/SVG/convert_path_to_polygon.xhtml'},]


     const BannersData = RandomBanner.map((random, index) => ({
          id: index + 1,
          banners: [RandomBanner[Math.floor(Math.random() * RandomBanner.length)], RandomBanner[Math.floor(Math.random() * RandomBanner.length)]],
     }));

     const [blocks, setBlocks] = useState(BannersData);
     const [wishList, setWishList] = useState(Array(items.length).fill(false));

     const handleWishClick = (index) => {
          const newWishList = [...wishList];
          newWishList[index] = !newWishList[index];
          setWishList(newWishList);
     };


     useEffect(() => {
          const intervalId = setInterval(() => {
               updateBlocks();
          }, 6000);

          return () => clearInterval(intervalId);
     }, []);


     const updateBlocks = () => {
          const newBlocks = blocks.map(block => ({
               id: block.id,
               banners: [RandomBanner[Math.floor(Math.random() * RandomBanner.length)], RandomBanner[Math.floor(Math.random() * RandomBanner.length)]],
          }));
          setBlocks(newBlocks);
     };


     const [widthState, setWidthState] = useState(1480);

     useEffect(() => {

          const handleResize = () => {
               setWidthState(window.innerWidth)
          };

          setWidthState(window.innerWidth)

          window.addEventListener('resize', handleResize);
          return () => {
               window.removeEventListener('resize', handleResize);
          };

     }, []);

     const [isRegistered, setIsRegistered] = useState(false);


     return (
          <div className="content__block">
               <div className="content-list-items">
                    {items.map((item, index) => (
                         <React.Fragment key={index}>
                              {widthState < 1480 ? (
                                   item.noFund ? (
                                        <Listing_card_mobile_free item={item} registred={isRegistered}  wish={wishList[index]} setWish={() => handleWishClick(index)} ind={index} />

                                   ) : (
                                        <Listing_card_mobile item={item} registred={isRegistered} wish={wishList[index]} setWish={() => handleWishClick(index)} ind={index}  />
                                   )
                              ) : (
                                   item.noFund ? (
                                        <Listing_card_free item={item} registred={isRegistered} wish={wishList[index]} setWish={() => handleWishClick(index)} ind={index} />
                                   ) : (
                                        <Listing_card item={item} registred={isRegistered} wish={wishList[index]} setWish={() => handleWishClick(index)} ind={index} />
                                   )
                              )}
                         </React.Fragment>
                    ))}
               </div>
               <div className="content-banners">
                    {[blocks[0].banners[0], blocks[0].banners[1]].map((banner, bannerIndex) => (
                         <ContentBanner key={bannerIndex} image={banner.banner} url={banner.url} />
                    ))}
               </div>
          </div>
     );

};

export default ContentBlock;
