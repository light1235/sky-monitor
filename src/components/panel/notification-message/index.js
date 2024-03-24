import React from 'react';
import './index.scss'
import Image from "next/image";
import adminImage from "@/assets/panel/image/user-icon.jpg";

const Notification = () => {
     return (
          <div className="notification-message">
               <Image src={adminImage} alt="admin image" /> <span>Razzelton</span> <p>Purchare new programm</p>
          </div>
     );
};

export default Notification;
