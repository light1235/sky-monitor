"use client"
import React from 'react';
import './index.scss';
import Link from "next/link";
import { useLocale } from 'next-intl';
import CustomToolTop from "@/components/main/tooltip_custom";

const InformationLine = ({image, items, scam, top}) => {
     const locale = useLocale();
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
                    {scam ? <div>{locale === 'en'? 'Warning':'Внимание!'}</div> :
                         <>{top ?<CustomToolTop text={items.projectInformation.ourInvestments.investDate}> <div>{items && items && items.projectInformation.ourInvestments.TopProjectMaxInvest}</div></CustomToolTop> :
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
