import React, {useEffect, useState} from 'react';
import './index.scss'
import Image from "next/image";
import advLogo from "@/assets/main/icons/payments-system/adv-cash.svg";
import bitcoinLogo from "@/assets/main/icons/payments-system/bitcoin.svg";
import perfectMoneyLogo from "@/assets/main/icons/payments-system/perfect-money.svg";
import netellerLogo from "@/assets/main/icons/payments-system/neteller.svg";
import qiwiLogo from "@/assets/main/icons/payments-system/qiwi.svg";
import webMoney from "@/assets/main/icons/payments-system/web-money.svg";
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
import Link from "next/link";
import CustomToolTop from "@/components/main/tooltip_custom";
import simillarWeb from "@/assets/main/icons/simillar-web.svg";
import whoIs from "@/assets/main/icons/who-is.svg";
import forumIocn from "@/assets/main/icons/forum-icon.svg";
import voteIcon from "@/assets/main/icons/vote-icon.svg";
import ArrowTopNextGroup from '../../../assets/main/icons/arrow-super-next.svg';
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const MobileListing = ({ item, wish,ind,setWish}) => {

     const handleWishClick = (event) => {
          event.stopPropagation(); // Предотвращаем всплытие события, чтобы оно не достигло родительского элемента
          setWish(ind);
     };

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
     const maxLength = 67;
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

     return (
          <div className={item.projectInformation.status.scam ? "listing__card-mobile scam-status" : 'listing__card-mobile'}>
               <div className="card-top_line">
                    <div className="program_name">{item.name}
                         {item.longTerm &&
                              <CustomToolTop text={'Long-term investment \n' +
                                   'project'}><span>Long Term</span></CustomToolTop>
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
                         <div className="content_wrapper">
                              <div className="content-items status">Status:<span
                                   style={{color: item.projectInformation.status.untraceable && '#DF5BD2'}}>{item.projectInformation.status.paying && ' Paying' || item.projectInformation.status.untraceable && ' Untraceable' || item.projectInformation.status.scam && ' Not Payed'}</span>
                              </div>
                              <div className="content-items">
                                   {!item.projectInformation.ourInvestments.anotherInvestment ?
                                        <div>Our
                                             investments:<span> {item.projectInformation.ourInvestments.our || item.projectInformation.ourInvestments.traceable}</span>
                                        </div>
                                        :
                                        <div>Investing<span
                                             style={{color: '#8bc643'}}>:{item.projectInformation.ourInvestments.anotherInvestment}</span>
                                        </div>
                                   }
                              </div>
                              <div className="content-items">Payout
                                   rate:<span> {item.projectInformation.payoutRate}</span></div>
                              <div className="content-items">Last paid: <span> {item.projectInformation.lastPaid}</span>
                              </div>
                              <div className="content-items">Created:<span> {formattedString}</span></div>
                              <div className="content-items">Minimal
                                   spend: <span> {item.projectInformation.minimalSpend}</span></div>
                              <div className="content-items">Withdrawal:<span> {item.projectInformation.withdrawal}</span>
                              </div>
                         </div>
                    </div>
                    <div className="right_side">
                    <div className="description">Accepted:</div>
                         <div className="payments-system">
                              {displayedPaymentSystems.map(system => (
                                   <div key={system} className="payment-system-icon">
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
                                   </div>
                              ))}
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
                         <div className="plan-description">{truncatedText}</div>
                    </div>
                    <div className="user-buttons">
                         <div className="button-forum"><span>Forum</span><Link target="_blank"  href={item.forum}> <Image width="15"
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
