"use client"
import React, {useEffect, useState} from 'react';
import {Tabs} from "antd";
import ContentBlock from "@/components/main/content-block";
import DATAJSON from '../../../assets/DataProjects.json';
import CustomWrapper from "@/components/main/custom-wrapper";
import  './index.scss'
import ArrowButton from '../../../assets/main/icons/arrow-button.svg';
import Image from "next/image";

const MainTabs = () => {

     const [showBlocks, setShowBlocks] = useState(1);
     const [showBlocksPremium, setShowBlocksPremium] = useState(1);
     const [showBlocksNormal, setShowBlocksNormal] = useState(1);
     const [showBlocksTrial, setShowBlocksTrial] = useState(1);
     const [showBlocksScam, setShowBlocksScam] = useState(1);


     const items = Object.values(DATAJSON.ListingData);
     const chunkSize = 6;
     const chunkedItems = [];

     for (let i = 0; i < items.length; i += chunkSize) {
          chunkedItems.push(items.slice(i, i + chunkSize));
     }

     const handleClick = () => {
          setShowBlocks(showBlocks + 1);
     };
     const handleClickPremium = () => {
          setShowBlocksPremium(showBlocksPremium + 1);
     };
     const handleClickNormal = () => {
          setShowBlocksNormal(showBlocksNormal + 1);
     };
     const handleClickTrial = () => {
          setShowBlocksTrial(showBlocksTrial + 1);
     };
     const handleClickScam = () => {
          setShowBlocksScam(showBlocksScam + 1);
     };





     const [activeTab, setActiveTab] = useState('1');

     useEffect(() => {
          // Получаем активный таб из localStorage при первом монтировании компонента
          const savedTab = localStorage.getItem('activeTab');
          if (savedTab) {
               setActiveTab(savedTab);
          }
     }, []);

     const handleTabChange = key => {
          setActiveTab(key);
          // Сохраняем активный таб в localStorage, чтобы сохранить его между переходами страниц
          localStorage.setItem('activeTab', key);
     };


     const filteredArrayPremium = items.filter(obj => obj.category === 'premium');
     const filteredArrayNormal = items.filter(obj => obj.category === 'normal');
     const filteredArrayTrial = items.filter(obj => obj.category === 'trial');
     const filteredArrayScam = items.filter(obj => obj.category === 'scam');
     const chunkedItems1 = [];
     const chunkedItems2 = [];
     const chunkedItems3 = [];
     const chunkedItems4 = [];
     for (let i = 0; i < filteredArrayPremium.length; i += chunkSize) {
          chunkedItems1.push(filteredArrayPremium.slice(i, i + chunkSize));
     }
     for (let i = 0; i < filteredArrayNormal.length; i += chunkSize) {
          chunkedItems2.push(filteredArrayNormal.slice(i, i + chunkSize));
     }
     for (let i = 0; i < filteredArrayTrial.length; i += chunkSize) {
          chunkedItems3.push(filteredArrayTrial.slice(i, i + chunkSize));
     }
     for (let i = 0; i < filteredArrayScam.length; i += chunkSize) {
          chunkedItems4.push(filteredArrayScam.slice(i, i + chunkSize));
     }


     return (
          <>
               <Tabs
                    defaultActiveKey={activeTab}
                    activeKey={activeTab}
                    onChange={handleTabChange}
                    centered
                    items={[
                         {
                              label: 'Overview',
                              key: '1',
                              children:  <CustomWrapper />
                              ,
                         },
                         {
                              label: 'Premium',
                              key: '2',
                              children: <>
                                   {chunkedItems1.slice(0, showBlocksPremium).map((chunk, index) => (
                                        <ContentBlock key={index} items={chunk} />
                                   ))}
                                   <div className="full-wrap" style={{display:'grid',width:'100%',justifyItems:'center'}}>
                                        {showBlocksPremium < chunkedItems1.length &&  <button className="show-more" onClick={handleClickPremium}>  <div className="inner-button"><Image src={ArrowButton} alt="arrow-icon"/></div></button>}
                                   </div>

                              </>,
                         },
                         {
                              label: 'Normal',
                              key: '3',
                              children:<>

                                   {chunkedItems2.slice(0, showBlocksNormal).map((chunk, index) => (
                                        <ContentBlock key={index} items={chunk} />
                                   ))}
                                   <div className="full-wrap" style={{display:'grid',width:'100%',justifyItems:'center'}}>
                                        {showBlocksNormal < chunkedItems2.length &&  <button className="show-more" onClick={handleClickNormal}>  <div className="inner-button"><Image src={ArrowButton} alt="arrow-icon"/></div></button>}
                                   </div>
                              </>,
                         },
                         {
                              label: 'Trial',
                              key: '4',
                              children: <>

                                   {chunkedItems3.slice(0, showBlocksTrial).map((chunk, index) => (
                                        <ContentBlock key={index} items={chunk} />
                                   ))}
                                   <div className="full-wrap" style={{display:'grid',width:'100%',justifyItems:'center'}}>
                                        {showBlocksTrial < chunkedItems3.length &&  <button className="show-more" onClick={handleClickTrial}>  <div className="inner-button"><Image src={ArrowButton} alt="arrow-icon"/></div></button>}
                                   </div>
                              </>,
                         },
                         {
                              label: 'Scam',
                              key: '5',
                              children:<>

                                   {chunkedItems4.slice(0, showBlocksScam).map((chunk, index) => (
                                        <ContentBlock key={index} items={chunk} />
                                   ))}
                                   <div className="full-wrap" style={{display:'grid',width:'100%',justifyItems:'center'}}>
                                        {showBlocksScam < chunkedItems4.length &&  <button className="show-more" onClick={handleClickScam}>  <div className="inner-button"><Image src={ArrowButton} alt="arrow-icon"/></div></button>}
                                   </div>
                              </>,
                         },
                    ]}
               />
          </>
     );
};

export default MainTabs;

