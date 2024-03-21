"use client"
import React, {useEffect, useState} from 'react';
import './index.scss';
import { AudioOutlined } from '@ant-design/icons';
import { Input} from 'antd';
const { Search } = Input;
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
import TableLine from "@/components/panel/standard-table-line";
import CustomDropDown1 from "@/components/panel/drop-down";
import CustomPagination from "@/components/panel/pagination";
import OptionTableLine from "@/components/panel/option-table-line";
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
                         <Button type="primary" size={'large'} style={{background:'#85CE36',fontFamily:'Open Sans',fontWeight:'600',width:'120px'}}>
                              Add new
                         </Button>
                         <CustomDropDown1 />
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
                    <div className="table-top">
                         <OptionTableLine />
                    </div>
                    <div className="table-content">
                         <TableLine  />
                         <TableLine background={'#FCFCFD'} />
                         <TableLine  />
                         <TableLine background={'#FCFCFD'} />
                         <TableLine  />
                         <TableLine background={'#FCFCFD'} />
                         <TableLine  />
                         <TableLine background={'#FCFCFD'} />
                    </div>
               </div>

          </div>
     );
};

export default ListingPage;
