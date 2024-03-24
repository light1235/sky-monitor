"use client"
import React, {useEffect, useState} from 'react';
import './index.scss';
import { AudioOutlined } from '@ant-design/icons';
import TableLine from "@/components/panel/standard-table-line";
import CustomDropDown1 from "@/components/panel/drop-down";
import CustomPagination from "@/components/panel/pagination";
import OptionTableLine from "@/components/panel/option-table-line";
import CustomSearch from "@/components/panel/custom-search";
import CustomButton from "@/components/panel/custom-button";


const suffix = (
     <AudioOutlined
          style={{
               fontSize: 16,
               color: '#1677ff',
          }}
     />
);

const items = [
     {
          label: (
               <>
                    <i className="icon-up-circle"></i> Mark a top
               </>
          ),
          key: '1',
     },
     {
          label: (
               <>
                    <i className="icon-mark-prem"></i> Mark premium
               </>
          ),
          key: '2',
     },
     {
          label: (
               <>
                    <i className="icon-ok-circled"></i> Mark normal
               </>
          ),
          key: '3',
     },
     {
          label: (
               <>
                    <i className="icon-ok"></i> Mark scam
               </>
          ),
          key: '4',
     },
     {
          label: (
               <>
                    <i className="icon-edit"></i> Mark normal
               </>
          ),
          key: '5',
     },
     {
          label: (
               <>
                    <i className="icon-cancel"></i> Mark delete
               </>
          ),
          key: '6',
     },
     {
          label: (
               <>
                    <i className="icon-play"></i> Published
               </>
          ),
          key: '7',
     },
];
const ListingPage = () => {

     return (
          <div className="listing-page">
               <div className="page-top-bar">
                    <div className="bar-actions">
                         <h2>Listing</h2>
                         <CustomButton />
                         <CustomDropDown1 items={items} />
                    </div>
                    <div className="bar-search">
                         <CustomSearch />
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
               <div className="pagination-wrap" style={{display:'grid',justifyItems:'end'}}>
                    <CustomPagination />
               </div>

          </div>
     );
};

export default ListingPage;
