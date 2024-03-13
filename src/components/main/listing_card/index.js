'use client'
import React from 'react';
import './index.scss'
import Image from "next/image";
import Link from "next/link";
import projectImage from '/src/assets/main/images/project-image.png';
import bitcoinLogo from '/src/assets/main/icons/payments-system/bitcoin.svg';
import advLogo from '/src/assets/main/icons/payments-system/adv-cash.svg'
import perfectMoneyLogo from '/src/assets/main/icons/payments-system/perfect-money.svg';
import netellerLogo from '/src/assets/main/icons/payments-system/neteller.svg';
import qiwiLogo from '/src/assets/main/icons/payments-system/qiwi.svg';
import webMoney from '/src/assets/main/icons/payments-system/web-money.svg';
import simillarWeb from '/src/assets/main/icons/simillar-web.svg';
import whoIs from '/src/assets/main/icons/who-is.svg';
import forumIocn from '/src/assets/main/icons/forum-icon.svg';
import voteIcon from '/src/assets/main/icons/vote-icon.svg';
import CustomToolTop from "@/components/main/tooltip_custom";



const ListingCard = () => {

     let ListingData = {
          category:'scam,premium or tp',
          id:'',
          name:'',
          longTerm:true,
          detailsLink:'http',
          projectImage:'1.png',
          projectInformation: {
               status:'',
               ourInvestments:'',
               payoutRate:'',
               lastPaid:'',
               created:'',
               minimalSpend:'',
               withdrawal:'',
               daysOnline:'',
               investedPlans:'',
          },
          paymentSystem:{
               bitcoin:true,
               neteller:true,
               kiwi:true,
               webMoney:true,
               perfectMoney:true,
          },
          info:{
               similarWeb:'http',
               whoIs:'http',
          },
          forum:'http',
          vote:{
               totalVote:'',
               votePercent:'',
               greenLine:'',
               redLine:'',
          }

     };


     return (
          <div className="listing__card">
               <div className="card-top_line">
                    <div className="program_name">BitMugnet <CustomToolTop text={'Long-term investment \n' +
                         'project'}><span>Long Term</span></CustomToolTop></div>
                    <div className="program_details"><Link target="_blank" href='/'><CustomToolTop text={'Program details'}> <div className="details-button"></div></CustomToolTop></Link></div>
               </div>
               <div className="card-middle_line">
                    <div className="left_side">
                         <Image src={projectImage} width="124" height="124" alt="project-image" ></Image>
                         <div className="content_wrapper">
                              <div className="content-items status">Status:<span> Paying</span></div>
                              <div className="content-items">Our investments:<span> 400$</span></div>
                              <div className="content-items">Payout rate:<span> 1033$</span></div>
                              <div className="content-items">Last paid: <span> June 25st 2017</span></div>
                              <div className="content-items">Created:<span> Jule 25st  2016</span></div>
                              <div className="content-items">Minimal spend: <span> 10$</span></div>
                              <div className="content-items">Withdrawal:<span> automatic</span></div>
                              <div className="content-items">Days online :<span> 125</span></div>
                         </div>
                    </div>
                    <div className="right_side">
                         <div className="description">Accepted:</div>
                         <div className="payments-system">
                              <Image src={advLogo} height="20" width="20" alt="payment-system-logo"/>
                              <Image src={bitcoinLogo} height="20" width="20" alt="payment-system-logo" />
                              <Image src={perfectMoneyLogo} height="20" width="20" alt="payment-system-logo" />
                              <Image src={netellerLogo} height="20" width="20" alt="payment-system-logo"/>
                              <Image src={qiwiLogo} height="20" width="20" alt="payment-system-logo"/>
                              <Image src={webMoney} height="20" width="20" alt="payment-system-logo"/>
                         </div>
                         <div className="info">Info</div>
                         <div className="project-info">
                              <Link target="_blank" href="https://www.similarweb.com/ru/">
                                   <CustomToolTop text={'Seo information'}>
                              <Image src={simillarWeb} height="20" width="20" alt="simillar_web_logo"/>
                                   </CustomToolTop>
                              </Link>
                              <Link target="_blank" href="https://whois.domaintools.com/">
                                   <CustomToolTop text={'Whois information'}>
                              <Image src={whoIs} height="20" width="20" alt="who_is_logo"/>
                                   </CustomToolTop>
                              </Link>
                         </div>
                    </div>
               </div>
               <div className="card-bottom_line">
                    <div className="invested-description">
                       <div>Invested plans:</div>
                         <span>2.9%-3.1% daily for 15-15 working days
150% after 15 buisness days</span>
                    </div>
                    <div className="user-buttons">
                         <div className="button-forum"><span>Forum</span><Link href='/'> <Image width="22" src={forumIocn} alt="forum_logo"/></Link></div>
                         <div className="button-vote"><span>Vote now</span><Link href='/'><CustomToolTop text={'Only for registered users'}> <Image width="22" src={voteIcon} alt="vote_logo"/></CustomToolTop></Link></div>
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
          </div>
     );
};

export default ListingCard;
