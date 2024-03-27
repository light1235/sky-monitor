"use client"
import React, {useEffect, useState} from 'react';
import Listing_card_mobile from "@/components/main/listing_card_mobile";
import {Tabs} from "antd";
import Listing_card from "@/components/main/listing_card";
import ContentBlock from "@/components/main/content-block";
import DATAJSON from '../../../assets/DataProjects.json';
import BlockSlat from "@/components/main/block_slat";

const MainTabs = () => {

     const [showBlocks, setShowBlocks] = useState(1);
     const [showBlocksPremium, setShowBlocksPremium] = useState(1);
     const [showBlocksNormal, setShowBlocksNormal] = useState(1);
     const [showBlocksTrial, setShowBlocksTrial] = useState(1);
     const [showBlocksScam, setShowBlocksScam] = useState(1);
     const [itemsJ, setItems] = useState([]);

     useEffect(() => {
          // Убедитесь, что DATAJSON определён и содержит ListingData
          if (DATAJSON && DATAJSON.ListingData) {
               setItems(Object.values(DATAJSON.ListingData));
          }
     }, [DATAJSON]); // DATAJSON должен быть добавлен в зависимости, чтобы useEffect срабатывал при его изменении

     // Ваш код компонента...
     // if (DATAJSON) {
     //
     // }

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
     let nmpt = [1,2]


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
                              children: <ContentBlock items={itemsJ} />,
                         },
                         {
                              label: 'Premium',
                              key: '2',
                              children: <>
                                   {chunkedItems1.slice(0, showBlocksPremium).map((chunk, index) => (
                                        <ContentBlock key={index} items={chunk} />
                                   ))}
                                   <button onClick={handleClickPremium}>Показать больше</button>
                              </>,
                         },
                         {
                              label: 'Normal',
                              key: '3',
                              children:<>

                                   {chunkedItems2.slice(0, showBlocksNormal).map((chunk, index) => (
                                        <ContentBlock key={index} items={chunk} />
                                   ))}
                                   <button onClick={handleClickNormal}>Показать больше</button>
                              </>,
                         },
                         {
                              label: 'Trial',
                              key: '4',
                              children: <>

                                   {chunkedItems3.slice(0, showBlocksTrial).map((chunk, index) => (
                                        <ContentBlock key={index} items={chunk} />
                                   ))}
                                   <button onClick={handleClickTrial}>Показать больше</button>
                              </>,
                         },
                         {
                              label: 'Scam',
                              key: '5',
                              children:<>

                                   {chunkedItems4.slice(0, showBlocksScam).map((chunk, index) => (
                                        <ContentBlock key={index} items={chunk} />
                                   ))}
                                   <button onClick={handleClickScam}>Показать больше</button>
                              </>,
                         },
                    ]}
               />
          </>
     );
};

export default MainTabs;

