"use client"
import React, {useState} from 'react';
import DATAJSON from '../../../assets/DataProjects.json';
import ContentBlock from "@/components/main/content-block";
import ArrowButton from '../../../assets/main/icons/arrow-button.svg';
import Image from "next/image";

const CustomWrapper = () => {
     const [showBlocks, setShowBlocks] = useState(1);

     const items = Object.values(DATAJSON.ListingData);
     const chunkSize = 6;
     const chunkedItems = [];

     for (let i = 0; i < items.length; i += chunkSize) {
          chunkedItems.push(items.slice(i, i + chunkSize));
     }

     const handleClick = () => {
          setShowBlocks(showBlocks + 1);
     };

     return (
          <>
               {chunkedItems.slice(0, showBlocks).map((chunk, index) => (
                    <ContentBlock key={index} items={chunk} />
               ))}
               <div className="full-wrap" style={{display:'grid',width:'100%',justifyItems:'center'}}>
                    {showBlocks < chunkedItems.length &&  <button className="show-more" onClick={handleClick}>  <div className="inner-button"><Image src={ArrowButton} alt="arrow-icon"/></div></button>}
               </div>
          </>
     );
};

export default CustomWrapper;
