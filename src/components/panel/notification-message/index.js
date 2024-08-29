import React from 'react';
import './index.scss'
import Image from "next/image";
import adminImage from "@/assets/panel/image/user-icon.jpg";

const Notification = ({item}) => {
     return (
          <div className="notification-message">
               <i className="icon-dollar" style={{color:'#85CE36'}}></i> <span>{item.definition}</span> <p>{item.activity} {item.listingType}</p>
          </div>
     );
};

export default Notification;
