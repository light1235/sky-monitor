"use client"
import React from 'react';
import './index.scss';
import Link from "next/link";

const InformationLine = ({ image,items,scam}) => {
     const domainStrings = [];
     if (items && items.name) {
               domainStrings.push(items.name);
     }
     if (scam) {
          console.log(items);
     }

     const removeDomain = /\..*$/;
     const modifiedStrings = domainStrings.map((originalString) =>
          originalString
               .replace(removeDomain, '')
               .replace(/-/g, '\u2011')
     );
     console.log(items && items.projectInformation.created);

     return (
          <>
               <Link target="_blank" href='/' className="information-line">
                    <div className="line-items">
                         <div className="item-logo">{image}</div>
                         <div className="item-name">{items && modifiedStrings}</div>
                    </div>
                    <div className="line-items-one">
                         {scam ? <div>Warning</div> :
                              <div className="item-numbers">{items && items.projectInformation.created}</div>
                         }

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
