"use client"
import React, {useEffect, useState} from 'react';
import CustomToolTop from "@/components/main/tooltip_custom";
import Link from "next/link";
import Image from "next/image";
import ArrowTopNextGroup from "@/assets/main/icons/arrow-super-next.svg";
import voteIcon from "@/assets/main/icons/vote-icon.svg";
import './index.scss'
import {Skeleton} from "antd";
import IconCrypto from "@/assets/main/icons/icon-crypto.svg";
import IconCash from "@/assets/main/icons/icon-cash.svg";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const MobileListingFree = ({item, wish,ind,setWish}) => {

     const handleWishClick = (event) => {
          event.stopPropagation(); // Предотвращаем всплытие события, чтобы оно не достигло родительского элемента
          setWish(ind);
     };

     const [imageLoadingMobile, setimageLoadingMobile] = useState(false);

     const handleImageLoad = () => {
          setimageLoadingMobile(true);
     };
     useEffect(() => {
          setimageLoadingMobile(true);
     }, []);
     //days online
     const startDate = new Date(item.projectInformation.created);
     const currentDate = new Date();
     const differenceMs = currentDate - startDate;
     const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

     const months = [
          'Jan', 'Feb', 'Mar', 'April', 'May', 'June',
          'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
     ];

     const day = startDate.getDate();
     const month = months[startDate.getMonth()];
     const year = startDate.getFullYear();
     const formattedString = `${month} ${day}st ${year}`;

     //
     const [truncatedText, setTruncatedText] = useState("");
     const maxLength = 180;
     useEffect(() => {
          const text = item.projectInformation.description
          if (text.length > maxLength) {
               setTruncatedText(text.substring(0, maxLength) + "…");
          } else {
               setTruncatedText(text);
          }
     }, []);


     const paymentSystems = Object.keys(item.paymentSystem).filter(system => item.paymentSystem[system]);

     // Ограничение длины массива до 6 элементов
     const displayedPaymentSystems = paymentSystems.slice(0, 6);

     return (
          <div className={item.projectInformation.status.scam ? "listing__card-mobile-free  scam-status" : 'listing__card-mobile-free '}>
               <div className="card-top_line">
                    <div className="program_name">{item.name}
                         {
                              <CustomToolTop text={'Free start \n' +
                                   'project'}><span>NoFund Project</span></CustomToolTop>
                         }
                    </div>
                    <div className="program-favorites" onClick={handleWishClick}>
                         {wish ? <AiFillHeart size="20px" color="#85CE36"/> :
                              <CustomToolTop text="add to favorites"> <AiOutlineHeart color={'#85CE36'} size="20px"/>
                              </CustomToolTop>}
                    </div>
                    <div className="program_details"><Link target="_blank" aria-label="program details"
                                                           href={item.detailsLink}><CustomToolTop
                         text={'Program details'}>
                         <div className="details-button">
                              <div className="button-circle"><Image src={ArrowTopNextGroup} alt="arrow icon" width="10"
                                                                    height="10"/></div>
                         </div>
                    </CustomToolTop></Link></div>
               </div>
               <div className="card-middle_line">
                    <div className="left_side">
                         {imageLoadingMobile ? (
                              <Image
                                   src={item.projectImage}
                                   width="124"
                                   height="124"
                                   alt="project-image"
                                   priority={true}
                              />
                         ) : (

                              <Skeleton.Image style={{width: 124, height: 124}} active/>
                         )}
                         <div className="content_wrapper">
                              <div className="content-items status">Status:
                                   <span>{item.projectInformation.status.announcement && 'Announcement' || item.projectInformation.status.launched && 'Launched' || item.projectInformation.status.listed && 'Listed'}</span>
                              </div>
                              <div className="content-items">Start:<span> {formattedString}</span></div>
                              <div className="content-items content-description">{truncatedText}</div>
                         </div>
                    </div>

               </div>
               <div className="card-bottom_line">
                    <div className="invested-description">
                         {item.projectInformation.crypto ? (
                              <>
                                   <Image src={IconCrypto} alt="crypto image" />
                                   <span>Crypto</span>
                              </>
                         ) : (
                              <>
                                   <Image src={IconCash} alt="cash image" />
                                   <span>Cash</span>
                              </>
                         )}
                    </div>
                    <div className="user-buttons">
                         <div className="button-vote"><span>Vote now</span><Link href='/'><CustomToolTop
                              text={'Only for registered users'}> <Image width="15" src={voteIcon}
                                                                         alt="vote_logo"/></CustomToolTop></Link></div>
                    </div>
               </div>
               <div className="card-vote-line">
                    <div className="line">
                         <div className="line-a"></div>
                         <div className="line-b"></div>
                    </div>
                    <div className="counter">88%</div>
                    <CustomToolTop text={'The number of users  ' +
                         'who voted'}>
                         <div className="amount-vote">490/500</div>
                    </CustomToolTop>
               </div>
          </div>
     );
};

export default MobileListingFree;
