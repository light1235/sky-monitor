import React from 'react';
import './index.scss'
import CustomButton from "@/components/panel/custom-button";
import CustomDropDown1 from "@/components/panel/drop-down";
import CustomSearch from "@/components/panel/custom-search";
import CustomPagination from "@/components/panel/pagination";
import TableLine from "@/components/panel/standard-table-line";
import OptionTableLine from "@/components/panel/option-table-line";


const items = [
     {
          label: (
               <>
                    <i className="icon-up-circle" style={{color:'black'}}></i> Mark a TOP Projects
               </>
          ),
          key: '1',
     },
     {
          label: (
               <>
                    <i className="icon-newspaper" style={{color:'#85CE36'}}></i> Mark New Listings
               </>
          ),
          key: '2',
     },
     {
          label: (
               <>
                    <i className="icon-alert" style={{color:'red'}}></i> Mark a scam
               </>
          ),
          key: '3',
     },
];
const InformationPage = () => {
     return (
          <div className="information-page">
               <div className="page-top-bar">
                    <div className="bar-actions">
                         <h2>Info Block</h2>
                         {/*<CustomButton/>*/}
                         <CustomDropDown1 items={items}/>
                    </div>
                    <div className="bar-search">
                         <CustomSearch/>
                    </div>
               </div>
               <div className="page-data-table">
                    <div className="table-top">
                <OptionTableLine category="Blocks" />
                    </div>
                    <div className="table-content">
                         <TableLine />
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

export default InformationPage;
