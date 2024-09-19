"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'
import CustomCheckBox from "@/components/panel/check-box";
import Custom_modal from "@/components/main/custom_modal";
import AddBannerForm from "@/components/panel/add-banner-form";

const AdvTableLine = ({EditeM = 'Edite listing', DeleteM = 'Mark delete', item, deleteBanner, editBanner }) => {
     const [activeMenu, setActiveMenu] = useState(false);
     const [activeEdit, setActiveEdit] = useState(false);

     useEffect(() => {
          // Close menu when clicking outside
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
               <div className="table-left">
                    <CustomCheckBox/>
                    <div className="image-block"></div>
                    <p>{item.name}</p>
               </div>
               <p style={{textAlign:'center'}}>Admin</p>
               <div className="table-right">
                    <div className="date-block">
                         <p>21 SEP 10.45</p>
                         <p>21 SEP 10.45</p>
                    </div>
                    <p>{item.category}</p>
                    <p className={item.status === 'active' ? 'active-status' : 'deactivate'}>{item.status}</p>
                    <div className="table-panel">
                         {activeMenu &&
                              <div className="edit-menu">
                                   <div className="edit" onClick={closePopUp} ><i className="icon-pencil"></i> <p>{EditeM}</p></div>
                                   <div onClick={handleDelete}><i className="icon-cancel"></i> <p>{DeleteM}</p></div>
                              </div>
                         }
                         <p>21 SEP 10.45</p><i className="icon-gear-custom" onClick={() => setActiveMenu(!activeMenu)}></i>
                    </div>
               </div>
               <Custom_modal open={activeEdit} close={closePopUp}>

                    <AddBannerForm
                         bannerName={item.name}
                         setBannerName={(newName) => editBanner(item.id, newName, item.category, item.url)}
                         bannerUrl={item.url}
                         setBannerUrl={(newUrl) => editBanner(item.id, item.name, item.category, newUrl)}
                         click={closePopUp}
                         setCat={(newCategory) => editBanner(item.id, item.name, newCategory, item.url)}
                    />
               </Custom_modal>
          </div>
     );
};

export default AdvTableLine;
