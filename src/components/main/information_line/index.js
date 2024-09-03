"use client"
import React from 'react';
import './index.scss';
import Link from "next/link";

const InformationLine = ({image, items, scam, top}) => {
     const domainStrings = [];
     if (items && items.name) {
          domainStrings.push(items.name);
     }

     const removeDomain = /\..*$/;
     const modifiedStrings = domainStrings.map((originalString) =>
          originalString
               .replace(removeDomain, '')
               .replace(/-/g, '\u2011')
     );

     const content = (
          <div className="information-line" style={scam ? {cursor: 'not-allowed'} : {cursor: 'help'}}>
               <div className="line-items">
                    <div className="item-logo">{image}</div>
                    <div className="item-name">{items && modifiedStrings}</div>
               </div>
               <div className="line-items-one">
                    {scam ? <div>Warning</div> :
                         <>{top ? <div>{items && items && items.projectInformation.ourInvestments.our}</div> :
                              <div className="item-numbers"
                                   style={{textDecoration: 'none'}}>{items && items.projectInformation.created}</div>}

                         </>

                    }
               </div>
          </div>
     );

     return (
          <>
               {scam ? content : <Link target="_blank" href='/' style={{textDecoration: 'none'}}>{content}</Link>}
          </>
     );
};

export default InformationLine;
