import React from 'react';
import './index.scss'
import Image from "next/image";
import topProjectLogo from '/src/assets/main/icons/top-projects-block-logo.svg';
import Link from "next/link";

const InformationLine = ({image,name,numbers,domains = 'Asignat.com' }) => {
    const domainStrings = [domains];
    const removeDomain = /\..*$/;
    const modifiedStrings = domainStrings.map((originalString) => originalString.replace(removeDomain, '') );

     return (
          <>
               <Link target="_blank" href='/' className="information-line">
                    <div className="line-items">
                         <div className="item-logo">{image}</div>
                         <div className="item-name">{modifiedStrings}</div>
                    </div>
                    <div className="line-items-one">
                         <div className="item-numbers">401$</div>
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
