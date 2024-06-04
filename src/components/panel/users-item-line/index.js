"use client"
import React, {useState} from 'react';
import BlockIcon from '../../../assets/panel/icons/block-icon.svg'
import UnlockIcon from '../../../assets/panel/icons/unlock.svg'
import Image from "next/image";
import './index.scss'

const UsersItemLine = ({item,back,onBlockClick}) => {
     const [isBlocked, setIsBlocked] = useState(false);

     const handleBlock = () => {
          if (!isBlocked) {
               setIsBlocked(true);
               onBlockClick(); // Trigger parent's blocking logic
          }
     };
     const handleUnlock = () => {
          if (isBlocked) {
               setIsBlocked(false);
               onBlockClick(); // Trigger parent's blocking logic
          }
     }
     return (
          <div className="users-item-line" style={{backgroundColor:back}}>
               <div className="users-right-table">
                 <Image src={BlockIcon} onClick={handleBlock} alt="icon" /> <p style={{color: item.block ? '#B81D1D' : '#999'}}>{item.name}</p>
               </div>
               <div className="users-left-table">
                      <p>{item.registerDate}</p>  <Image src={UnlockIcon} alt="icon" onClick={handleUnlock} />
               </div>
          </div>
     );
};

export default UsersItemLine;
