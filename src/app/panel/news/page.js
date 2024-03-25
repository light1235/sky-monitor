import React from 'react';
import './index.scss'
import CustomButton from "@/components/panel/custom-button";
import CustomDropDown1 from "@/components/panel/drop-down";
import CustomSearch from "@/components/panel/custom-search";
import OptionTableLine from "@/components/panel/option-table-line";
import TableLine from "@/components/panel/standard-table-line";
import CustomPagination from "@/components/panel/pagination";
import NewsStepper from "@/components/panel/news-stepper";


const items = [
     {
          label: (
               <>
                    <i className="icon-up-circle" style={{color:'gold'}}></i> Mark a top
               </>
          ),
          key: '1',
     },
     {
          label: (
               <>
                    <i className="icon-pencil" ></i> Edit News
               </>
          ),
          key: '2',
     },
     {
          label: (
               <>
                    <i className="icon-window-close-o" ></i> Delete News
               </>
          ),
          key: '3',
     },
     {
          label: (
               <>
                    <i className="icon-play" style={{color:'black'}}></i> Published
               </>
          ),
          key: '4',
     },

];

const NewsPage = () => {
     return (
          <div className="news-page">
               <div className="page-top-bar">
                    <div className="bar-actions">
                         <h2>Listing</h2>
                         <CustomButton/>
                         <CustomDropDown1 items={items}/>
                    </div>
                    <div className="bar-search">
                         <CustomSearch/>
                    </div>
               </div>
               <div className="page-data-table">
                    <div className="table-top">
                         <OptionTableLine category="Mark a top"/>
                    </div>
                    <div className="table-content">
                         <TableLine EditeM="Edite News" DeleteM="Delete News" published={true}/>
                         <TableLine background={'#FCFCFD'}/>
                         <TableLine/>
                         <TableLine background={'#FCFCFD'} published={true}/>
                         <TableLine/>
                         <TableLine background={'#FCFCFD'}/>
                         <TableLine/>
                         <TableLine background={'#FCFCFD'}/>
                    </div>
               </div>
               <div className="pagination-wrap" style={{display: 'grid', justifyItems: 'end'}}>
                    <CustomPagination/>
               </div>
               {/*<NewsStepper />*/}
          </div>
     );
};

export default NewsPage;
