import React from 'react';
import './index.scss'
import NewsLineLogo from "@/assets/main/icons/news-line-logo.svg";
import Image from "next/image";

const UserNotification = ({item}) => {
     return (
          <div className="notification-msg">
               <div className="notification-img"><Image src={NewsLineLogo} alt="fire icon" height={29}></Image></div>
               <div className="notification-type">{item.type}</div>
               <div className="notification-definition">{item.definition === 'Activity' ? item.date : item.definition}</div>
               <div className="notification-activity">{item.type === 'Activity'? <span><p className="vote-msg">{item.vote}</p> vote <p className="com-mgs">{item.comments}</p> comments</span> :item.activity }</div>
          </div>
     );
};

export default UserNotification;

