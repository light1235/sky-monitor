"use client"
import React, {useEffect, useState} from 'react';
import './index.scss';
import { AudioOutlined } from '@ant-design/icons';
import { Input} from 'antd';
const { Search } = Input;
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
// eslint-disable-next-line react-hooks/rules-of-hooks
// const [size, setSize] = useState('large');
// eslint-disable-next-line react-hooks/rules-of-hooks


const suffix = (
     <AudioOutlined
          style={{
               fontSize: 16,
               color: '#1677ff',
          }}
     />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const ListingPage = () => {

     const [size, setSize] = useState('large');
     return (
          <div className="listing-page">
               <div className="page-top-bar">
                    <div className="bar-actions">
                         <h2>Listing</h2>
                         <Button type="primary" size={size} style={{background:'#85CE36',fontFamily:'Open Sans',fontWeight:'600'}}>
                              Add new
                         </Button>
                    </div>
                    <div className="bar-search">

                         <Search
                              placeholder="input search text"
                              onSearch={onSearch}
                              style={{
                                   width: 300,
                              }}
                         />

                    </div>
               </div>
               <div className="page-data-table">
                    <div className="table-top">Lorem ipsum dolor sit amet.</div>
                    <div className="table-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto blanditiis culpa deleniti deserunt dignissimos ea, error esse facere facilis fuga inventore ipsa molestiae mollitia nulla quam quis quos recusandae repellendus saepe sequi, vel vitae. Dignissimos distinctio eaque exercitationem illum ipsum laborum necessitatibus, omnis pariatur reprehenderit sequi similique suscipit.</div>
               </div>

          </div>
     );
};

export default ListingPage;
