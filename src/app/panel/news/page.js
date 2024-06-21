"use client"
import React, {useState} from 'react';
import './index.scss'
import CustomButton from "@/components/panel/custom-button";
import CustomDropDown1 from "@/components/panel/drop-down";
import CustomSearch from "@/components/panel/custom-search";
import OptionTableLine from "@/components/panel/option-table-line";
import TableLine from "@/components/panel/standard-table-line";
import CustomPagination from "@/components/panel/pagination";
import Custom_modal from "@/components/main/custom_modal";
import NewsStepper from "@/components/panel/news-stepper";


const items = [
     {
          label: (
               <>
                    <i className="icon-up-circle" style={{color:'gold'}}></i> Pin to top
               </>
          ),
          key: '1',
     },
     {
          label: (
               <>
                    <i className="icon-stop" style={{color:'red'}} ></i> Un pin
               </>
          ),
          key: '2',
     },
     {
          label: (
               <>
                    <i className="icon-pencil" ></i> Edit News

               </>
          ),
          key: '3',
     },
     {
          label: (
               <>
                    <i className="icon-window-close-o" ></i> Delete News
               </>
          ),
          key: '4',
     },
     {
          label: (
               <>
                    <i className="icon-play" style={{color:'black'}}></i> Published
               </>
          ),
          key: '5',
     },
     {
          label: (
               <>
                    <i className="icon-commenting" style={{color:'#85CE36'}}></i> Open Comments
               </>
          ),
          key: '6',
     },
     {
          label: (
               <>
                    <i className="icon-lock-open" style={{color:'red'}}></i> Block Comments
               </>
          ),
          key: '7',
     },

];

const NewsPage = () => {
     const [activeModal, setActiveModal] = useState(false);

     const handleModal = () => {
          setActiveModal(!activeModal);
     }

     return (
          <div className="news-page">
               <div className="page-top-bar">
                    <div className="bar-actions">
                         <h2>Listing</h2>
                         <div onClick={handleModal}><CustomButton/></div>
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
               <Custom_modal open={activeModal} close={handleModal}>

                    <NewsStepper />
               </Custom_modal>
          </div>
     );
};

export default NewsPage;
