'use client'
import React, {useEffect, useState} from 'react';
import './index.scss'
import Image from "next/image";
import Link from "next/link";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {Divider, Form, Popover, Radio, Skeleton, Space, Switch} from 'antd';
import { useSpring, animated } from '@react-spring/web'


import bitcoinLogo from '/src/assets/main/icons/payments-system/bitcoin.svg';
import advLogo from '/src/assets/main/icons/payments-system/adv-cash.svg'
import perfectMoneyLogo from '/src/assets/main/icons/payments-system/perfect-money.svg';
import netellerLogo from '/src/assets/main/icons/payments-system/neteller.svg';
import qiwiLogo from '/src/assets/main/icons/payments-system/qiwi.svg';
import webMoney from '/src/assets/main/icons/payments-system/web-money.svg';
import bnb from '/src/assets/main/icons/payments-system/bnb.svg';
import dodgeCoin from '/src/assets/main/icons/payments-system/dodge-coin.svg';
import eth from '/src/assets/main/icons/payments-system/eth.svg';
import liteCoin  from  '/src/assets/main/icons/payments-system/lite-coin.svg';
import payoneer from '/src/assets/main/icons/payments-system/payoneer.svg';
import payPall from '/src/assets/main/icons/payments-system/pay-pall.svg';
import payza from '/src/assets/main/icons/payments-system/payza.svg';
import ripple from '/src/assets/main/icons/payments-system/ripple.svg';
import skrill from '/src/assets/main/icons/payments-system/skrill.svg';
import tether from '/src/assets/main/icons/payments-system/tether.svg';
import tron from '/src/assets/main/icons/payments-system/tron-trx.svg';
import simillarWeb from '/src/assets/main/icons/simillar-web.svg';
import whoIs from '/src/assets/main/icons/who-is.svg';
import forumIocn from '/src/assets/main/icons/forum-icon.svg';
import voteIcon from '/src/assets/main/icons/vote-icon.svg';
import CustomToolTop from "@/components/main/tooltip_custom";
import ArrowTopNextGroup from '../../../assets/main/icons/arrow-super-next.svg';
import {easings} from "react-spring";
import CustomModal from "@/components/main/custom_modal";
import VotePopUp from "@/components/main/vote-pop-up";
import CountdownTimer from "@/utils/hooks/countDownTimer";


const ListingCard = ({ item, wish,ind,setWish,registred}) => {
     const [AnimationFavorite, FastScale] = useSpring(() => ({
          from: { scale:1 },
     }))
     const [wishAnimation, setWishAnimation] = useState(true);
     const handleWishClick = (event) => {
          // event.stopPropagation();
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

     const url = new URL(item.detailsLink);
     const formattedUrl = url.origin;
     const fullFormat = url.host
     const whoIsLink = `https://whois.domaintools.com/${formattedUrl}`
     const SimilarWeb = `https://www.similarweb.com/ru/website/${fullFormat}/#overview`
     //days online
     const startDate = new Date(item.projectInformation.created);
     const currentDate = new Date();
     const differenceMs = currentDate - startDate;
     const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

     // Определяем названия месяцев
     const months = [
          'Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
          'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
     ];

     const day = startDate.getDate();
     const month = months[startDate.getMonth()];
     const year = startDate.getFullYear();
     const formattedString = `${month} ${day}st ${year}`;

     //
     const [truncatedText, setTruncatedText] = useState("");
     const maxLength = 67; // Установите максимальное количество символов

     useEffect(() => {
          const text = item.projectInformation.investedPlans
          if (text.length > maxLength) {
               setTruncatedText(text.substring(0, maxLength) + "…");
          } else {
               setTruncatedText(text);
          }
     }, []);

     const paymentSystems = Object.keys(item.paymentSystem).filter(system => item.paymentSystem[system]);

     // Ограничение длины массива до 6 элементов
     const displayedPaymentSystems = paymentSystems.slice(0, 6);

     const [imageLoading, setImageLoading] = useState(false);

     const domainStrings = [item.name];
     const removeDomain = /\..*$/;
     const filterName = domainStrings.map((originalString) =>
          originalString
               .replace(removeDomain, '')
               .replace(/-/g, '\u2011')
     );


     const handleImageLoad = () => {
          setImageLoading(true);
     };
     useEffect(() => {
          setImageLoading(true);
     }, [paymentSystems]);

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
          handleClick();
          setVoteArray('1')
          setTimeout( () => {
               setModalConfirm(true)
               setPopOver(false)
               setColorYes(true);
          },1400)
          console.log("vote");
     };

     const subtractVote  = () => {
          handleClickNo();
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
                    <animated.svg  width="30"  fill={colorYes ? 'none' : '#8bc643'} style={{  ...springsYes}} viewBox="0 0 16 15"  xmlns="http://www.w3.org/2000/svg">
                         <path
                              d="M1.49584 6.44707H3.69477C3.97503 6.44707 4.19061 6.66375 4.19061 6.94544V13.4893C4.19061 13.771 3.97503 13.9877 3.69477 13.9877H1.49584C1.21558 13.9877 1 13.771 1 13.4893V6.94544C1 6.68542 1.21558 6.44707 1.49584 6.44707ZM7.72616 1.55C7.98486 0.228223 10.1191 1.44166 10.27 3.56517C10.2916 4.32356 10.2485 5.08196 10.076 5.81868H13.1373C14.4092 5.86202 15.5302 6.79377 14.7326 8.28889C14.905 8.93894 14.9482 9.71901 14.4523 10.0224C14.517 11.0625 14.2152 11.6908 13.6978 12.2109C13.6547 12.7309 13.5469 13.186 13.3097 13.5327C12.9001 14.1177 12.5552 13.9877 11.9084 13.9877H6.75604C5.93683 13.9877 5.4841 13.7493 4.94515 13.0776V7.27047C6.47578 6.85877 7.29499 4.73526 7.72616 3.34848V1.55Z"
                               stroke-miterlimit="10"/>
                    </animated.svg>
               </div>
               <div className="vote-item item-no" onClick={subtractVote}>
                    <animated.svg  width="30"  viewBox="0 0 16 15" fill={colorNo ? 'none' : '#CC0000'} style={{  ...springsNo}} xmlns="http://www.w3.org/2000/svg">
                         <path
                              d="M14.5042 8.55293L12.3052 8.55293C12.025 8.55293 11.8094 8.33625 11.8094 8.05456L11.8094 1.51068C11.8094 1.22899 12.025 1.01231 12.3052 1.01231L14.5042 1.01231C14.7844 1.01231 15 1.22899 15 1.51068L15 8.05456C15 8.31458 14.7844 8.55293 14.5042 8.55293ZM8.27384 13.45C8.01514 14.7718 5.88088 13.5583 5.72998 11.4348C5.70842 10.6764 5.75153 9.91804 5.924 9.18132L2.86274 9.18131C1.5908 9.13798 0.469778 8.20623 1.26743 6.71111C1.09497 6.06106 1.05185 5.28099 1.54769 4.97763C1.48301 3.93755 1.78483 3.30916 2.30223 2.78912C2.34534 2.26908 2.45313 1.81404 2.69027 1.46735C3.09988 0.882297 3.44481 1.01231 4.09155 1.01231L9.24396 1.01231C10.0632 1.01231 10.5159 1.25066 11.0549 1.92238L11.0549 7.72953C9.52422 8.14123 8.70501 10.2647 8.27384 11.6515L8.27384 13.45Z"
                               stroke-miterlimit="10"/>
                    </animated.svg>
               </div>
          </div>
     );
     // TODO: доработать логику pop over что бы счетчик активировался сам а не при наведении на него

     return (
          <div className={item.projectInformation.status.scam ? "listing__card-thin scam-status" : 'listing__card-thin'}>
               <div className="card-top_line">
                    <div className="program_name">{filterName}
                         {item.longTerm &&
                              <CustomToolTop text={'Long-term investment \n' +
                                   'project'}><span>Long Term</span></CustomToolTop>
                         }
                    </div>
                    <animated.div className="program-favorites" style={...AnimationFavorite} onClick={handleWishClick}>
                         {wish ? <AiFillHeart size="20px" color="#85CE36"/> :
                              <CustomToolTop text="add to favorites"><AiOutlineHeart color={'#85CE36'} size="20px"/>
                              </CustomToolTop>}
                    </animated.div>
                              <div className="program_details"><Link rel="nofollow" target="_blank" aria-label="program details" href={item.detailsLink}><CustomToolTop text={'Program details'}> <div className="details-button"><div className="button-circle"><Image src={ArrowTopNextGroup} alt="arrow icon" width="10" height="10" /></div></div></CustomToolTop></Link></div>
               </div>
               <div className="card-middle_line">
                    <div className="left_side">
                         {imageLoading ? (
                              <Image
                                   src={item.projectImage}
                                   width="124"
                                   height="124"
                                   alt="project-image"
                                   onLoad={handleImageLoad}
                                   priority={true}
                              />
                         ) : (

                              <Skeleton.Image style={{ width: 124, height: 124 }} active />
                         )}
                         {/*<Image src={item.projectImage} width="124" height="124" alt="project-image" ></Image>*/}
                         <div className="content_wrapper">
                              <div className="content-items status">Status:<span style={{ color: item.projectInformation.status.untraceable && '#DF5BD2'}}>{item.projectInformation.status.paying && ' Paying' ||item.projectInformation.status.untraceable && ' Untraceable' || item.projectInformation.status.scam && ' Not Payed'}</span></div>
                              <div className="content-items">
                                   {!item.projectInformation.ourInvestments.anotherInvestment ?
                                        <div>Our investments:<span> {item.projectInformation.ourInvestments.our || item.projectInformation.ourInvestments.traceable}</span>
                                        </div>
                                        :
                                        <div>Investing<span
                                             style={{color: '#8bc643'}}>:{item.projectInformation.ourInvestments.anotherInvestment}</span>
                                        </div>
                                   }
                              </div>
                              <div className="content-items">Payout rate:<span> {item.projectInformation.payoutRate}</span></div>
                              <div className="content-items">Last paid: <span> {item.projectInformation.lastPaid}</span></div>
                              <div className="content-items">Created:<span> {formattedString}</span></div>
                              <div className="content-items">Minimal spend: <span> {item.projectInformation.minimalSpend}</span></div>
                              <div className="content-items">Withdrawal:<span> {item.projectInformation.withdrawal}</span></div>
                              <div className="content-items">Days online :<span> {days}</span></div>
                         </div>
                    </div>
                    <div className="right_side">
                         <div className="description">Accepted:</div>
                         <div className="payments-system">
                              {displayedPaymentSystems.map(system => (
                                   <div key={system} className="payment-system-icon">
                                        <CustomToolTop  text={system}>
                                        {system === "bitcoin" && <Image src={bitcoinLogo} height="15" width="15" alt="Bitcoin Logo" />}
                                        {system === "neteller" && <Image src={netellerLogo} height="15" width="15" alt="Neteller Logo" />}
                                        {system === "qiwi" && <Image src={qiwiLogo} height="15" width="15" alt="Qiwi Logo" />}
                                        {system === "webMoney" && <Image src={webMoney} height="15" width="15" alt="WebMoney Logo" />}
                                        {system === "perfectMoney" && <Image src={perfectMoneyLogo} height="15" width="15" alt="Perfect Money Logo" />}
                                        {system === "adv" && <Image src={advLogo} height="15" width="15" alt="Adv Logo" />}
                                        {system === "bnb" && <Image src={bnb} height="15" width="15" alt="Binance Logo" />}
                                        {system === "dodgeCoin" && <Image src={dodgeCoin} height="15" width="15" alt="DodgeCoin Logo" />}
                                        {system === "eth" && <Image src={eth} height="15" width="15" alt="Ethereum Logo" />}
                                        {system === "liteCoin" && <Image src={liteCoin} height="15" width="15" alt="LiteCoin Logo" />}
                                        {system === "payoneer" && <Image src={payoneer} height="15" width="15" alt="Payoneer Logo" />}
                                        {system === "payPall" && <Image src={payPall} height="15" width="15" alt="PayPal Logo" />}
                                        {system === "payza" && <Image src={payza} height="15" width="15" alt="Payza Logo" />}
                                        {system === "ripple" && <Image src={ripple} height="15" width="15" alt="Ripple Logo" />}
                                        {system === "skrill" && <Image src={skrill} height="15" width="15" alt="Skrill Logo" />}
                                        {system === "tether" && <Image src={tether} height="15" width="15" alt="Tether Logo" />}
                                        {system === "tron" && <Image src={tron} height="15" width="15" alt="Tron Logo" />}
                                        </CustomToolTop>
                                   </div>
                              ))}
                         </div>
                         <div className="info">Info</div>
                         <div className="project-info">
                              <Link rel="nofollow" target="_blank" href={SimilarWeb}>
                                   <CustomToolTop text={'Seo information'}>
                                        <Image src={simillarWeb} height="15" width="15" alt="simillar_web_logo"/>
                                   </CustomToolTop>
                              </Link>
                              <Link rel="nofollow" target="_blank" href={whoIsLink}>
                                   <CustomToolTop text={'Whois information'}>
                                        <Image src={whoIs} height="15" width="15" alt="who_is_logo"/>
                                   </CustomToolTop>
                              </Link>
                         </div>
                    </div>
               </div>
               <div className="card-bottom_line">
                    <div className="invested-description">
                         <div>Invested plans:</div>
                         <div className="plans">{truncatedText} </div>
                    </div>
                    <div className="user-buttons">
                         <div className="button-forum"><span>Forum</span><Link rel="nofollow" target="_blank" href={item.forum}> <Image width="15" src={forumIocn} alt="forum_logo"/></Link></div>
                         <div className={disableVote? 'button-vote disable-vote' : 'button-vote'}><span>Vote now</span>
                              {/*<CustomToolTop  text={'Only for registered users'}>*/}
                              {disableVote ?
                                   <CustomToolTop  text={<CountdownTimer initialHours={0.005} onComplete={handleComplete}/>}> <Image width="15" src={voteIcon} alt="vote_logo"/></CustomToolTop>
                                   :
                                   <Popover content={VoteMenu} open={popOver} onOpenChange={showPopOver}  trigger="click">
                                        <Image width="15"  src={voteIcon} alt="vote_logo"/>
                                   </Popover>
                              }
                              {/*</CustomToolTop>*/}
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
                         'who voted'}><div className="amount-vote">490/500</div></CustomToolTop>
               </div>
               <CustomModal open={modalConfirm} close={showModal}  > <VotePopUp close={showModal} disable={disableVoteFunction} voteData={voteArray} name={item.name} /></CustomModal>
          </div>

     );
};

export default ListingCard;
