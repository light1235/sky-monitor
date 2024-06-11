"use client"
import React, {useEffect, useState} from 'react';
import CustomToolTop from "@/components/main/tooltip_custom";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {  Skeleton } from 'antd';
import Link from "next/link";
import Image from "next/image";
import voteIcon from "@/assets/main/icons/vote-icon.svg";
import './index.scss'
import ArrowTopNextGroup from "@/assets/main/icons/arrow-super-next.svg";


const ListingCardFree = ({ item, wish,ind,setWish }) => {

     const handleWishClick = (event) => {
          event.stopPropagation(); // Предотвращаем всплытие события, чтобы оно не достигло родительского элемента
          setWish(ind);
     };

     const [imageLoading, setImageLoading] = useState(false);

     const handleImageLoad = () => {
          setImageLoading(true);
     };
     useEffect(() => {
          setImageLoading(true);
     }, []);

     return (
          <div className={item.projectInformation.status.scam ? "listing__card-thin listing__card-free scam-status" : 'listing__card-thin listing__card-free'}>
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
                    {imageLoading ? (
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
                         {/*<Image src={item.projectImage} width="124" height="124" alt="project-image" ></Image>*/}
                         <div className="content_wrapper">
                              <div className="content-items status">Status:
                                   <span>{item.projectInformation.status.announcement && 'Announcement'}</span>
                              </div>
                              <div className="content-items">
                              </div>
                              <div className="content-items">Payout
                                   rate:<span> </span></div>
                              <div className="content-items">Last paid: <span> </span>
                              </div>
                              <div className="content-items">Created:<span> </span></div>
                              <div className="content-items">Minimal
                                   spend: <span> </span></div>
                              <div className="content-items">Withdrawal:<span> </span>
                              </div>
                              <div className="content-items">Days online :<span> </span></div>
                         </div>
                    </div>
                    <div className="right_side">

                    </div>
               </div>
               <div className="card-bottom_line">
                    <div className="invested-description">
                         <div>Invested plans:</div>
                         <div className="plans">1</div>
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

export default ListingCardFree;
