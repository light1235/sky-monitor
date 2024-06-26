"use client"
import React, {useEffect, useState} from 'react';
import Listing_card from "@/components/main/listing_card";
import './index.scss'
import Listing_card_mobile from "@/components/main/listing_card_mobile";
import ContentBanner from "@/components/main/content-banner";
import Listing_card_free from "@/components/main/listing_card_free";
import Listing_card_mobile_free from "@/components/main/listing_card_mobile_free";



const ContentBlock = ({items}) => {

     const RandomArr = ['https://cdn.discordapp.com/attachments/1046398987659395152/1222300614822858975/lapaido728e.gif?ex=6615b727&is=66034227&hm=ea9ab7c7d1c08748dcbafddd521bb9847edd1996174f957e9bff84bc98d76c6a&','https://cdn.discordapp.com/attachments/1046398987659395152/1222301455751450727/hyiproom468ee.gif?ex=6615b7f0&is=660342f0&hm=08e151b28c710eda72999109636b1831e8100e76e633f505b2f1a6a9d2fd7063&','https://cdn.discordapp.com/attachments/1046398987659395152/1223050673155866684/489.gif?ex=661871b3&is=6605fcb3&hm=1f1cf894e284f09ae4e70760823075a2e9b54042294dc3205e9f78e2d18c1599&','https://cdn.discordapp.com/attachments/1046398987659395152/1223050746887405609/493.gif?ex=661871c5&is=6605fcc5&hm=28e0589eba23113b67b0a94d437743fa91eb7ff772807aa938fe499481ccee84&','https://cdn.discordapp.com/attachments/1046398987659395152/1223050710527115386/492.gif?ex=661871bc&is=6605fcbc&hm=014f81456a832e02ce2666106a28bde42707f2bb7ea674d33cada22297623db0&','https://cdn.discordapp.com/attachments/1046398987659395152/1223050593866875002/rotor.webp?ex=661871a0&is=6605fca0&hm=901e0330e249d9f902ad2497d5df394e28889f21784e1ddd89f2bf944c3e183f&'];


     const BannersData = RandomArr.map((random, index) => ({
          id: index + 1,
          banners: [RandomArr[Math.floor(Math.random() * RandomArr.length)], RandomArr[Math.floor(Math.random() * RandomArr.length)]],
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
               // shuffleBlocks();
               updateBlocks();
          }, 6000);

          return () => clearInterval(intervalId);
     }, []);


     const updateBlocks = () => {
          const newBlocks = blocks.map(block => ({
               id: block.id,
               banners: [RandomArr[Math.floor(Math.random() * RandomArr.length)], RandomArr[Math.floor(Math.random() * RandomArr.length)]],
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
                         <ContentBanner key={bannerIndex} image={banner} />
                    ))}
               </div>
          </div>
     );

};

export default ContentBlock;

