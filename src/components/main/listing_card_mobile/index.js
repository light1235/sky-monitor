import React from 'react';
import './index.scss'
import Image from "next/image";
import advLogo from "@/assets/main/icons/payments-system/adv-cash.svg";
import bitcoinLogo from "@/assets/main/icons/payments-system/bitcoin.svg";
import perfectMoneyLogo from "@/assets/main/icons/payments-system/perfect-money.svg";
import netellerLogo from "@/assets/main/icons/payments-system/neteller.svg";
import qiwiLogo from "@/assets/main/icons/payments-system/qiwi.svg";
import webMoney from "@/assets/main/icons/payments-system/web-money.svg";
import Link from "next/link";
import CustomToolTop from "@/components/main/tooltip_custom";
import simillarWeb from "@/assets/main/icons/simillar-web.svg";
import whoIs from "@/assets/main/icons/who-is.svg";
import forumIocn from "@/assets/main/icons/forum-icon.svg";
import voteIcon from "@/assets/main/icons/vote-icon.svg";

const MobileListing = () => {
     return (
          <div className="listing__card-mobile">
               <div className="card-top_line">
                    <div className="program_name">BitMugnet <CustomToolTop text={'Long-term investment \n' +
                         'project'}><span>Long Term</span></CustomToolTop></div>
                    <div className="program_details"><Link target="_blank" href='/'><CustomToolTop
                         text={'Program details'}>
                         <div className="details-button"></div>
                    </CustomToolTop></Link></div>
               </div>
               <div className="card-middle_line">
                    <div className="left_side">
                         <div className="content_wrapper">
                         <div className="content-items status">Status:<span> Paying</span></div>
                              <div className="content-items">Our investments:<span> 400$</span></div>
                              <div className="content-items">Payout rate:<span> 1033$</span></div>
                              <div className="content-items">Last paid: <span> June 25st 2017</span></div>
                              <div className="content-items">Created:<span> Jule 25st  2016</span></div>
                              <div className="content-items">Minimal spend: <span> 10$</span></div>
                              <div className="content-items">Withdrawal:<span> automatic</span></div>
                         </div>
                    </div>
                    <div className="right_side">
                         <div className="description">Accepted:</div>
                         <div className="payments-system">
                              <Image src={advLogo} height="15" width="15" alt="payment-system-logo"/>
                              <Image src={bitcoinLogo} height="15" width="15" alt="payment-system-logo"/>
                              <Image src={perfectMoneyLogo} height="15" width="15" alt="payment-system-logo"/>
                              <Image src={netellerLogo} height="15" width="15" alt="payment-system-logo"/>
                              <Image src={qiwiLogo} height="15" width="15" alt="payment-system-logo"/>
                              <Image src={webMoney} height="15" width="15" alt="payment-system-logo"/>
                         </div>
                         <div className="info">Info</div>
                         <div className="project-info">
                              <Link target="_blank" href="https://www.similarweb.com/ru/">
                                   <CustomToolTop text={'Seo information'}>
                                        <Image src={simillarWeb} height="15" width="15" alt="simillar_web_logo"/>
                                   </CustomToolTop>
                              </Link>
                              <Link target="_blank" href="https://whois.domaintools.com/">
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
                         <div className="plan-description">2.9%-3.1% daily for 15-15 working days
150% after 15 buisness days</div>
                    </div>
                    <div className="user-buttons">
                         <div className="button-forum"><span>Forum</span><Link href='/'> <Image width="15"
                                                                                                src={forumIocn}
                                                                                                alt="forum_logo"/></Link>
                         </div>
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

export default MobileListing;
