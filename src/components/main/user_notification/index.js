import React from 'react';
import './index.scss'
import NewsLineLogo from "@/assets/main/icons/newsIconNew.svg";
import ScamLogo from "@/assets/main/icons/scamIconNew.svg";
import newListing from "@/assets/main/icons/listingIconNew.svg";
import comments from "@/assets/main/icons/commentIconNew.svg";
import PinIcon from "@/assets/main/icons/pinIconNew.svg";
import Image from "next/image";

const UserNotification = ({item}) => {
     return (
          <div className="notification-msg">
               <div className="notification-img">
                    {item.type === 'news' ? <Image src={NewsLineLogo} alt="fire icon" height={29}></Image> : null }
                    {item.type === 'scam' ? <Image src={ScamLogo} alt="fire icon" height={29}></Image> : null }
                    {item.type === 'pin' ? <Image src={PinIcon} alt="fire icon" height={29}></Image> : null }
                    {item.type === 'project' ? <Image src={newListing} alt="fire icon" height={29}></Image> : null }
                    {item.type === 'Activity' ? <Image src={comments} alt="fire icon" height={29}></Image> : null }
               </div>
               <div className="notification-type">{item.type}</div>
               <div className="notification-definition">{item.definition === 'Activity' ? item.date : item.definition}</div>
               <div className="notification-activity">{item.type === 'Activity'? <span><p className="vote-msg">{item.vote}</p>  vote <p className="com-mgs">{item.comments}</p> comments</span> :item.activity }</div>
          </div>
     );
};

export default UserNotification;

