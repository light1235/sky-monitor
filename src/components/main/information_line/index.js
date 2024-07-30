"use client"
import React, { useEffect, useState } from 'react';
import './index.scss';
import Link from "next/link";
import ModifiedStrings from "@/utils/hooks/modifiedString";
// import DataArt from '../../../db/listingData.json'

const InformationLine = ({ image, name, numbers, domains = 'Asignat.com', items }) => {
     // Create an array with the initial domain
     const domainStrings = [];

     // Add items.name to the domainStrings array if items is defined and has a name property
     if (items && items.name) {
          domainStrings.push(items.name);
     }

     // Use a regular expression to remove the domain part of each string
     const removeDomain = /\..*$/;
     const modifiedStrings = domainStrings.map((originalString) => originalString.replace(removeDomain, ''));

     return (
          <>
               <Link target="_blank" href='/' className="information-line">
                    <div className="line-items">
                         <div className="item-logo">{image}</div>
                         <div className="item-name">{items && items.name}</div>
                    </div>
                    <div className="line-items-one">
                         <div className="item-numbers">{items.projectInformation.created}</div>
                    </div>
               </Link>
          </>
     );
};

export default InformationLine;





// const YourComponent = () => {
//      // Исходные строки с разными доменами
//      const domainStrings = ['Asignat.com', 'AnotherSite.ru', 'Example.org', 'MySite.me'];
//
//      // Регулярное выражение для удаления доменов
//      const removeDomain = /\..*$/;
//
//      // Удаление доменов из строк
//      const modifiedStrings = domainStrings.map((originalString) =>
//           originalString.replace(removeDomain, '')
//      );
//
//      return (
//           <div>
//                {/* Вывод измененных строк без доменов */}
//                {modifiedStrings.map((modifiedString, index) => (
//                     <div key={index}>{modifiedString}</div>
//                ))}
//           </div>
//      );
// };
//
// export default YourComponent;
