"use client"
import React, {useEffect, useState} from 'react';
import Listing_card from "@/components/main/listing_card";
import './index.scss'
import Listing_card_mobile from "@/components/main/listing_card_mobile";
import ContentBanner from "@/components/main/content-banner";
import Listing_card_free from "@/components/main/listing_card_free";
import Listing_card_mobile_free from "@/components/main/listing_card_mobile_free";



const ContentBlock = ({items}) => {

     const RandomArr = ['https://cdn.discordapp.com/attachments/1046398987659395152/1222300614822858975/lapaido728e.gif?ex=66964167&is=6694efe7&hm=f9a7af6e9cc4d1ed90308c1cf22dcb9fa976734d9eed8148692ed879c9686016&',
          'https://cdn.discordapp.com/attachments/1046398987659395152/1222301455751450727/hyiproom468ee.gif?ex=66964230&is=6694f0b0&hm=0e7b96eac06556c957da6c487f049dc1afa1e3f499bc4fb710df0e2eae905a03&',
          'https://cdn.discordapp.com/attachments/1046398987659395152/1223050593866875002/rotor.webp?ex=669658e0&is=66950760&hm=e4544c7da84f4d131ff8b9d6acd7882ae81fb5c4a27db9533243bc73e6dcb92e&',
          'https://cdn.discordapp.com/attachments/1046398987659395152/1223050673155866684/489.gif?ex=669658f3&is=66950773&hm=d80481fc816ea58dbc85ea6a3a716fa8b0e46ad543cef14733bbc9389fc5bf53&',
          'https://cdn.discordapp.com/attachments/1046398987659395152/1223050710527115386/492.gif?ex=669658fc&is=6695077c&hm=b2683a09b1440484df3610106d286c0d5e2f99e21038a7d52a8d5f897b58e305&',
          'https://cdn.discordapp.com/attachments/1046398987659395152/1223050746887405609/493.gif?ex=66965905&is=66950785&hm=ba3389dda9a782b7d03446db79f65d92d4c115b1e3d4e8c63badacbb98a44493&'];

     const RandomBanner = [{banner:'https://cdn.discordapp.com/attachments/1046398987659395152/1222300614822858975/lapaido728e.gif?ex=66964167&is=6694efe7&hm=f9a7af6e9cc4d1ed90308c1cf22dcb9fa976734d9eed8148692ed879c9686016&',url:'https://google.com'},{banner:'https://cdn.discordapp.com/attachments/1046398987659395152/1222301455751450727/hyiproom468ee.gif?ex=66964230&is=6694f0b0&hm=0e7b96eac06556c957da6c487f049dc1afa1e3f499bc4fb710df0e2eae905a03&',url:'https://www.facebook.com/'},{banner:'https://cdn.discordapp.com/attachments/1046398987659395152/1223050593866875002/rotor.webp?ex=669658e0&is=66950760&hm=e4544c7da84f4d131ff8b9d6acd7882ae81fb5c4a27db9533243bc73e6dcb92e&',url:'https://www.instagram.com/'},{banner:'https://cdn.discordapp.com/attachments/1046398987659395152/1223050673155866684/489.gif?ex=669658f3&is=66950773&hm=d80481fc816ea58dbc85ea6a3a716fa8b0e46ad543cef14733bbc9389fc5bf53&',url:'https://www.zfort.com.ua/'},{banner:'https://cdn.discordapp.com/attachments/1046398987659395152/1223050710527115386/492.gif?ex=669a4d7c&is=6698fbfc&hm=ab44ee3e2b4262148a28458b6bc32677b2da58f15a87ff77372d3cf249883c37&',url:'https://betravis.github.io/shape-tools/path-to-polygon/'}]

     // // RandomBanner.map((item, index) =>
     // //      console.log(item.url)
     // // )





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
               // shuffleBlocks();
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
                         // console.log(blocks[0].banners[0])
                    ))}
               </div>
          </div>
     );

};

export default ContentBlock;
