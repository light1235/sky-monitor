"use client"
import React, { useEffect, useState } from 'react';
import './index.scss';
import Link from "next/link";
import CountdownTimer from "@/utils/hooks/countDownTimer";

const AlertsLine = ({ item, deleteItem, index }) => {

     return (
          <div className="alerts-line">
               <div className="line-image">
                    {item.type === 'project' && <i className="icon-audio-description"></i>}
                    {item.type === 'news' && <i className="icon-newspaper"></i>}
                    {item.type === 'alert' && <i className="icon-edit"></i>}
                    {item.type === 'special' && <i className="icon-payments"></i>}
               </div>
               {/*{item.type = 'special' ?*/}
               {/*     <>*/}
               {/*          <div className="line-content">{item.title}</div>*/}
               {/*     </> :*/}
               {/*     <div>{item.article}</div>*/}

               {/*}*/}
               {item.type === 'special' ?
                    <>
                         <div className="line-content">{item.title}</div>
                         <div className="line-content">{item.text}</div>
                         <Link rel="nofollow" target="_blank" href={item.url}
                               className="line-content">{item.url}</Link>
                         <div className="line-content">
                              Time: {index === 0 ? <CountdownTimer initialHours={item.hours} id={item.id}
                                                                   onComplete={() => deleteItem(item.id)}/> : item.hours}
                         </div>
                    </>
                    :
                    <>
                         <div className="line-content">{item.article}</div>
                         <div className="line-content">{item.description}</div>
                         <Link rel="nofollow" target="_blank" href={item.link}
                               className="line-content">{item.link}</Link>
                         <div className="line-content">
                              Time: {index === 0 ? <CountdownTimer initialHours={item.hours} id={item.id} onComplete={() => deleteItem(item.id)}/> : item.hours}
                         </div>
                    </>
               }

               <div className="line-close" onClick={() => deleteItem(item.id)}>
                    <i className="icon-window-close-o"></i>
               </div>
          </div>
     );
};

export default AlertsLine;


// Time: {index === 0 ? <CountdownTimer initialHours={time} /> : item.hours}
