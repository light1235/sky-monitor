"use client"
import React, {useEffect, useState} from 'react';
import CustomToolTop from "@/components/main/tooltip_custom";
import Link from "next/link";
import Image from "next/image";
import ArrowTopNextGroup from "@/assets/main/icons/arrow-super-next.svg";
import voteIcon from "@/assets/main/icons/vote-icon.svg";
import './index.scss'
import {Popover, Skeleton} from "antd";
import IconCrypto from "@/assets/main/icons/icon-crypto.svg";
import IconCash from "@/assets/main/icons/icon-cash.svg";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {animated, useSpring} from "@react-spring/web";
import {easings} from "react-spring";
import CountdownTimer from "@/utils/hooks/countDownTimer";
import VotePopUp from "@/components/main/vote-pop-up";
import CustomModal from "@/components/main/custom_modal";

const MobileListingFree = ({item, wish,ind,setWish}) => {

     const [AnimationFavorite, FastScale] = useSpring(() => ({
          from: { scale:1 },
     }))
     const [wishAnimation, setWishAnimation] = useState(true);

     const handleWishClick = (event) => {
          event.stopPropagation();
          setWish(ind);

          setWishAnimation(!wishAnimation)
          wishAnimation ?
               FastScale.start({
                    from: { scale:1,duration:10},
                    to: [
                         { scale:1.37,duration:50  },
                         { scale:1,duration:10 },
                    ],
                    config: {
                         easing: easings.easeInOutBack	,
                         duration:350,
                    },
                    // onRest : () => console.log("12377"), // onComplete
               })
               : null
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

     const domainStrings = [item.name];
     const removeDomain = /\..*$/;
     const filterName = domainStrings.map((originalString) =>
          originalString
               .replace(removeDomain, '')
               .replace(/-/g, '\u2011')
     );


     const [springsYes, api] = useSpring(() => ({
          from: { scale:1 },
     }))
     const [springsNo, apiNo] = useSpring(() => ({
          from: { scale:1 },
     }))
     const handleClick = () => {
          api.start({
               from: { scale:1 },
               to: [
                    { scale:1.30 },
                    { scale:1},
               ],
               config: {
                    easing: easings.easeInOutBack,
                    duration:350,
               },
               onStart : () => {
                    setColorYes(false);
               },
               // onRest : () => console.log("123"), // onComplete
          })
     }
     const handleClickNo = () => {
          apiNo.start({
               from: { scale:1 },
               to: [
                    { scale:1.30 },
                    { scale:1},
               ],
               config: {
                    easing: easings.easeInOutBack,
                    duration:350,
               },
               onStart : () => {
                    setColorNo(false);
               },
               // onRest : () => console.log("123"), // onComplete
          })
     };

     const [colorYes, setColorYes] = useState(true);
     const [colorNo, setColorNo] = useState(true);
     const [disableVote, setDisableVote] = useState(false);



     const [voteArray, setVoteArray] = useState('');
     const [modalConfirm, setModalConfirm] = useState(false);
     const [popOver, setPopOver] = useState(false);

     const showPopOver = () => {
          setPopOver(!popOver)
     };

     const showModal = () => {
          setModalConfirm(!modalConfirm)
     };

     const adVote = () => {
          setVoteArray('1')
          setTimeout( () => {
               setModalConfirm(true)
               setPopOver(false)
               setColorYes(true);
          },1400)
     };

     const subtractVote  = () => {
          setVoteArray('-1')
          setTimeout( () => {
               setModalConfirm(true)
               setPopOver(false)
               setColorNo(true)
          },1400)
     };
     const disableVoteFunction = () => {
          setDisableVote(true)
          setModalConfirm(false)

     };
     const handleComplete = () => {
          console.log('Timer completed!');
          setDisableVote(false)
     };


     const VoteMenu = (
          <div className="vote__menu">
               <div className="vote-item item-yes" onClick={adVote} >
                    <animated.svg  onClick={handleClick} width="30"  fill={colorYes ? 'none' : '#8bc643'} style={{  ...springsYes}} viewBox="0 0 16 15"  xmlns="http://www.w3.org/2000/svg">
                         <path
                              d="M1.49584 6.44707H3.69477C3.97503 6.44707 4.19061 6.66375 4.19061 6.94544V13.4893C4.19061 13.771 3.97503 13.9877 3.69477 13.9877H1.49584C1.21558 13.9877 1 13.771 1 13.4893V6.94544C1 6.68542 1.21558 6.44707 1.49584 6.44707ZM7.72616 1.55C7.98486 0.228223 10.1191 1.44166 10.27 3.56517C10.2916 4.32356 10.2485 5.08196 10.076 5.81868H13.1373C14.4092 5.86202 15.5302 6.79377 14.7326 8.28889C14.905 8.93894 14.9482 9.71901 14.4523 10.0224C14.517 11.0625 14.2152 11.6908 13.6978 12.2109C13.6547 12.7309 13.5469 13.186 13.3097 13.5327C12.9001 14.1177 12.5552 13.9877 11.9084 13.9877H6.75604C5.93683 13.9877 5.4841 13.7493 4.94515 13.0776V7.27047C6.47578 6.85877 7.29499 4.73526 7.72616 3.34848V1.55Z"
                              stroke-miterlimit="10"/>
                    </animated.svg>
               </div>
               <div className="vote-item item-no" onClick={subtractVote}>
                    <animated.svg onClick={handleClickNo} width="30"  viewBox="0 0 16 15" fill={colorNo ? 'none' : '#CC0000'} style={{  ...springsNo}} xmlns="http://www.w3.org/2000/svg">
                         <path
                              d="M14.5042 8.55293L12.3052 8.55293C12.025 8.55293 11.8094 8.33625 11.8094 8.05456L11.8094 1.51068C11.8094 1.22899 12.025 1.01231 12.3052 1.01231L14.5042 1.01231C14.7844 1.01231 15 1.22899 15 1.51068L15 8.05456C15 8.31458 14.7844 8.55293 14.5042 8.55293ZM8.27384 13.45C8.01514 14.7718 5.88088 13.5583 5.72998 11.4348C5.70842 10.6764 5.75153 9.91804 5.924 9.18132L2.86274 9.18131C1.5908 9.13798 0.469778 8.20623 1.26743 6.71111C1.09497 6.06106 1.05185 5.28099 1.54769 4.97763C1.48301 3.93755 1.78483 3.30916 2.30223 2.78912C2.34534 2.26908 2.45313 1.81404 2.69027 1.46735C3.09988 0.882297 3.44481 1.01231 4.09155 1.01231L9.24396 1.01231C10.0632 1.01231 10.5159 1.25066 11.0549 1.92238L11.0549 7.72953C9.52422 8.14123 8.70501 10.2647 8.27384 11.6515L8.27384 13.45Z"
                              stroke-miterlimit="10"/>
                    </animated.svg>
               </div>
          </div>
     );

     return (
          <div className={item.projectInformation.status.scam ? "listing__card-mobile-free  scam-status" : 'listing__card-mobile-free '}>
               <div className="card-top_line">
                    <div className="program_name">{filterName}
                         {
                              <CustomToolTop text={'Free start \n' +
                                   'project'}><span>NoFund Project</span></CustomToolTop>
                         }
                    </div>
                    <animated.div className="program-favorites" style={...AnimationFavorite} onClick={handleWishClick}>
                         {wish ? <AiFillHeart size="20px" color="#85CE36"/> :
                              <CustomToolTop text="add to favorites"> <AiOutlineHeart color={'#85CE36'} size="20px"/>
                              </CustomToolTop>}
                    </animated.div>
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
                         <div className={disableVote? 'button-vote disable-vote' : 'button-vote'}><span>Vote now</span>
                              {disableVote ?
                                   <CustomToolTop  text={<CountdownTimer initialHours={0.005} onComplete={handleComplete}/>}> <Image width="15" src={voteIcon} alt="vote_logo"/></CustomToolTop>
                                   :
                                   <Popover content={VoteMenu} open={popOver} onOpenChange={showPopOver}  trigger="click">
                                        <Image width="15"  src={voteIcon} alt="vote_logo"/>
                                   </Popover>
                              }
                           </div>
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
               <CustomModal open={modalConfirm} close={showModal}  > <VotePopUp close={showModal} disable={disableVoteFunction} voteData={voteArray} name={item.name} /></CustomModal>
          </div>
     );
};

export default MobileListingFree;
