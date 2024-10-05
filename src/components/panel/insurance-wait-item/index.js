"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'

const WaitItem = ({item,filter,deleteItem}) => {

     const [truncatedText, setTruncatedText] = useState("");
     const maxLength = 10;

     useEffect(() => {
          const text = item.name
          if (text.length > maxLength) {
               setTruncatedText(text.substring(0, maxLength) + "…");
          } else {
               setTruncatedText(text);
          }
     }, [item.name]);

     return (
          <div className="wait-item">
               <div onClick={() => filter(item.name)} className="item-filter">{truncatedText}</div>
               <div className="time-out">time out</div>
               <div onClick={() => deleteItem(item)}><i className="icon-window-close-o"></i></div>
          </div>
     );
};

export default WaitItem;
