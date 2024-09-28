"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'
import CustomCheckBox from "@/components/panel/check-box";
import Custom_modal from "@/components/main/custom_modal";
import AddBannerForm from "@/components/panel/add-banner-form";
import {formatDate} from "@/utils/hooks/formateDate";

const AdvTableLine = ({EditeM = 'Edite listing', DeleteM = 'Mark delete', item, deleteBanner, editBanner }) => {
     const [activeMenu, setActiveMenu] = useState(false);
     const [activeEdit, setActiveEdit] = useState(false);
     const selectFormat = Date.now() + (item.to * 7) * 24 * 60 * 60 * 1000;

     useEffect(() => {
          const handleClickOutsideMenu = (event) => {
               if (activeMenu) {
                    setActiveMenu(false);
               }
          };

          document.addEventListener('click', handleClickOutsideMenu);
          return () => {
               document.removeEventListener('click', handleClickOutsideMenu);
          };
     }, [activeMenu]);

     const handleDelete = () => {
          deleteBanner(item.id);
     };
     const closePopUp = () => {
          setActiveEdit(!activeEdit);
     };

     return (
          <div className="adv-table">
               <div className="table-right">
                    <CustomCheckBox/>
                    <div className="image-block"></div>
                    <p>{item.name}</p>
                    <p style={{textAlign: 'center'}}>Admin</p>
                    <div className="date-block">
                         <p>{formatDate(item.start)}</p>
                         <p>{formatDate(selectFormat)}</p>
                    </div>
                    <p>{item.category}</p>
                    <p className={item.status === 'active' ? 'active-status' : 'deactivate'}>{item.status}</p>
                    <div className="table-panel">
                         {activeMenu &&
                              <div className="edit-menu">
                                   <div className="edit" onClick={closePopUp}><i className="icon-pencil"></i>
                                        <p>{EditeM}</p></div>
                                   <div onClick={handleDelete}><i className="icon-cancel"></i> <p>{DeleteM}</p></div>
                              </div>
                         }
                         <p>{formatDate(item.start)}</p><i className="icon-gear-custom"
                                               onClick={() => setActiveMenu(!activeMenu)}></i>
                    </div>
               </div>
               <Custom_modal open={activeEdit} close={closePopUp}>

                    <AddBannerForm
                         bannerName={item.name}
                         setBannerName={(newName) => editBanner(item.id, newName, item.category, item.url, item.to)}
                         bannerUrl={item.url}
                         setBannerUrl={(newUrl) => editBanner(item.id, item.name, item.category, newUrl, item.to)}
                         selectTime={(newTime) => editBanner(item.id, item.name, item.category, item.url, newTime)}
                         selectedTime={item.to}
                         setCat={(newCategory) => editBanner(item.id, item.name, newCategory, item.url, item.to)}
                         click={closePopUp}
                    />
               </Custom_modal>
          </div>
     );
};

export default AdvTableLine;
