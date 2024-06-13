import React from 'react';
import './index.scss'
import CustomSearch from "@/components/panel/custom-search";
import SaleTableLine from "@/components/panel/sale-table-line";
import CustomPagination from "@/components/panel/pagination";

const SaleStatistics = () => {

     const SaleData = [
          {name:'Razzelton',income:'15$',type:'Listing',start:'19.05',end:'26.05'},
          {name:'Espino',income:'15$',type:'Banner',start:'19.05',end:'26.05'},
          {name:'Soprano',income:'15$',type:'PopUp',start:'19.05',end:'26.05'},
          {name:'Razzelton',income:'15$',type:'Listing',start:'19.05',end:'26.05'},
          {name:'Razzelton',income:'15$',type:'Listing',start:'19.05',end:'26.05'},
          {name:'Razzelton',income:'15$',type:'Listing',start:'19.05',end:'26.05'}
     ]
     return (
          <div className="sale__page">
               <div className="page-top-bar">
                    <h2>Report table</h2>
                    <div className="bar-search">
                         <CustomSearch/>
                    </div>
               </div>
               <div className="page-data-table">
                    <div className="table-top">
                         <p className="grid-item-top">Company name</p>
                         <p className="grid-item-top">Income</p>
                         <p className="grid-item-top">Type</p>
                         <p className="grid-item-top">Start date</p>
                         <p className="grid-item-top">End date</p>
                    </div>
                    {SaleData.map((item,index) =>
                         <SaleTableLine item={item} key={index} back={index % 2 === 0 ? " " : "#F2F2F2"}/>
                    )}
               </div>
               <div className="pagination-wrap" style={{display: 'grid', justifyItems: 'end'}}>
                    <CustomPagination/>
               </div>
          </div>
     );
};

export default SaleStatistics;
