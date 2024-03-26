"use client"
import React, {useEffect, useState} from 'react';
import Listing_card_mobile from "@/components/main/listing_card_mobile";
import {Tabs} from "antd";
import Listing_card from "@/components/main/listing_card";
import ContentBlock from "@/components/main/content-block";

const MainTabs = () => {

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
                              children: <div style={{
                                   display: 'grid',
                                   gridTemplateColumns: '1fr 1fr 1fr',
                                   justifyItems: 'center'
                              }}><Listing_card_mobile/></div>,
                         },
                         {
                              label: 'Premium',
                              key: '2',
                              children: <><ContentBlock/> </>,
                         },
                         {
                              label: 'Normal',
                              key: '3',
                              children:<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',justifyItems:'center'}}> <Listing_card_mobile/> <Listing_card_mobile/></div> ,
                         },
                         {
                              label: 'Trial',
                              key: '4',
                              children: <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}></div>,
                         },
                         {
                              label: 'Scam',
                              key: '5',
                              children: 'tab5',
                         },
                    ]}
               />
          </>
     );
};

export default MainTabs;

// <ContentBlock/>
