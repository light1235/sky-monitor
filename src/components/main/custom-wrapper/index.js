"use client"
import React, {useState} from 'react';
import DATAJSON from '../../../assets/DataProjects.json';
import ContentBlock from "@/components/main/content-block";

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
               <button onClick={handleClick}>Показать больше</button>
          </>
     );
};

export default CustomWrapper;
