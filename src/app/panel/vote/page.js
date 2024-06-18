"use client"
import React, { useEffect, useState } from 'react';
import './index.scss'
import { AudioOutlined } from "@ant-design/icons";
import CustomButton from "@/components/panel/custom-button";
import CustomDropDown1 from "@/components/panel/drop-down";
import CustomSearch from "@/components/panel/custom-search";
import OptionVoteTopLine from "@/components/panel/option-vote-top-line";
import VoteTableLine from "@/components/panel/vote-table-line";

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
                    <i className="icon-up-circle"></i> Edit voting
               </>
          ),
          key: '1',
     },
];

const VotePanel = () => {
     const [voteDataTable, setVoteDataTable] = useState([
          { image: '', name: 'Razzelton', vote: { for: '2', against: '10' }, type: 'power', category: 'Hardwave' },
          { image: '', name: 'Espino', vote: { for: '8', against: '10' }, type: 'admin', category: 'Hardwave' },
          { image: '', name: 'SafeAssets', vote: { for: '22', against: '10' }, type: 'ganster', category: 'Cash' },
          { image: '', name: 'Dora', vote: { for: '12', against: '10' }, type: 'admin', category: 'Crypto' },
     ]);

     useEffect(() => {
          console.log(voteDataTable);
     }, [voteDataTable]);

     const handlePaymentDataChange = (index, newVoteData) => {
          setVoteDataTable((prevData) =>
               prevData.map((item, i) =>
                    i === index ? { ...item, vote: newVoteData } : item
               )
          );
     };

     return (
          <div className="vote__page">
               <div className="page-top-bar">
                    <div className="bar-actions">
                         <h2>Vote</h2>
                    </div>
                    <div className="bar-search">
                         <CustomSearch />
                    </div>
               </div>
               <div className="page-vote-table">
                    <div className="table-top">
                         <OptionVoteTopLine />
                    </div>
                    <div className="table-content">
                         {voteDataTable.map((item, index) =>
                              <VoteTableLine
                                   onPaymentDataChange={(newVoteData) => handlePaymentDataChange(index, newVoteData)}
                                   dataFor={item.vote.for}
                                   dataAgainst={item.vote.against}
                                   item={item}
                                   key={index}
                                   back={index % 2 === 0 ? " " : "#FCFCFD"}
                              />
                         )}
                    </div>
               </div>
          </div>
     );
};

export default VotePanel;
