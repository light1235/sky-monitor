import React from 'react';
import './index.scss'
import CustomButton from "@/components/panel/custom-button";
import CustomDropDown1 from "@/components/panel/drop-down";
import CustomSearch from "@/components/panel/custom-search";
import OptionTableLine from "@/components/panel/option-table-line";
import TableLine from "@/components/panel/standard-table-line";
import CustomPagination from "@/components/panel/pagination";
import AdvTableLine from "@/components/panel/adv-table-line";
import CustomCheckBox from "@/components/panel/check-box";

const TimeLineAdv = () => {

     const items = [

          {
               label: (
                    <>
                         <i className="icon-play"></i> Mark activate
                    </>
               ),
               key: '1',
          },
          {
               label: (
                    <>
                         <i className="icon-stop"></i> Mark deactivate
                    </>
               ),
               key: '2',
          },
          {
               label: (
                    <>
                         <i className="icon-cancel"></i> Mark delete
                    </>
               ),
               key: '3',
          },
     ];


     return (
          <div className="time-line__page">
               <div className="page-top-bar">
                    <div className="bar-actions">
                         <h2>Banner</h2>
                         <CustomButton/>
                         <CustomDropDown1 items={items}/>
                    </div>
                    <div className="bar-search">
                         <CustomSearch/>
                    </div>
               </div>
               <div className="page-data-table">
                    <div className="table-top">
                         <div className="option-adv-table">
                              <div className="table-left">
                                   <CustomCheckBox/><p className="image-table">Image</p><p>Project Name</p>
                              </div>
                              <p style={{textAlign:'center'}}>Type</p>
                              <div className="table-right">

                                   <div className="table-date">
                                        <p>From</p>
                                        <p>Up to</p>
                                   </div>
                                   <p>Category</p>
                                   <p>Site url</p>
                                   <p>Published</p>
                              </div>
                         </div>
                    </div>
                    <div className="table-content">
                         <AdvTableLine/>
                         <AdvTableLine/>
                         <AdvTableLine/>
                         <AdvTableLine/>

                    </div>
               </div>
               <div className="pagination-wrap" style={{display: 'grid', justifyItems: 'end'}}>
                    <CustomPagination/>
               </div>
          </div>
     );
};

export default TimeLineAdv;
