"use client"
import React, {useEffect, useState} from 'react';
import Listing_card from "@/components/main/listing_card";
import './index.scss'
import Listing_card_mobile from "@/components/main/listing_card_mobile";
import ContentBanner from "@/components/main/content-banner";
import Listing_card_free from "@/components/main/listing_card_free";
import Listing_card_mobile_free from "@/components/main/listing_card_mobile_free";

const ContentBlock = ({items}) => {

     const RandomBanner = [{banner:'https://lostpix.com/img/2024-10/04/p6tlcjwj6rhcvhf0yg6tm5xsz.gif',url:'https://google.com'},{banner:'https://lostpix.com/img/2024-10/04/dczamdr5scfmjp5c6e1gd3wq3.gif',url:'https://www.facebook.com/'},{banner:'https://lostpix.com/img/2024-10/04/gud31fju87idsnwguvtilnfbu.gif',url:'https://www.instagram.com/'},{banner:'https://lostpix.com/img/2024-10/04/j5oejfhxzd6i3w7xrx8d3pl74.gif',url:'https://www.zfort.com.ua/'},{banner:'https://lostpix.com/img/2024-10/04/cdma0df9pisknvasprm8iz3g6.gif',url:'https://betravis.github.io/shape-tools/path-to-polygon/'},{banner:'https://lostpix.com/img/2024-10/04/40ytpgjgu5dlxbnfnvs4zc5cq.gif',url:'http://phrogz.net/SVG/convert_path_to_polygon.xhtml'},]


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
