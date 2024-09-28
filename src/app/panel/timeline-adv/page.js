"use client"
import React, {useEffect, useState} from 'react';
import './index.scss';
import CustomButton from "@/components/panel/custom-button";
import CustomDropDown1 from "@/components/panel/drop-down";
import CustomSearch from "@/components/panel/custom-search";
import CustomPagination from "@/components/panel/pagination";
import AdvTableLine from "@/components/panel/adv-table-line";
import CustomCheckBox from "@/components/panel/check-box";
import Custom_modal from "@/components/main/custom_modal";
import AddBannerForm from "@/components/panel/add-banner-form";

const TimeLineAdv = () => {

     const [activeModal, setActiveModal] = useState(false);
     const [advertisement, setAdvertisement] = useState([
          {name: 'Razzelton', url:'top', type: '', from: '', to: 1, category: 'Header-banner', status: 'active', start: Date.now(), id: '1'},
          {name: 'Espino', url:'', type: '', from: '', to: 1, category: 'Content-banner', status: 'active', start: Date.now(), id: '2'},
          {name: 'SaveAssets', url:'', type: '', from: '', to: 1, category: 'Header-banner', status: 'deactivate', start: Date.now(), id: '3'},
          {name: 'Devor', url:'', type: '', from: '', to:1, category: 'Content-banner', status: 'active', start: Date.now(), id: '4'},
     ]);
     const [newBannerText, setNewBannerText] = useState('');
     const [newCategory, setNewCategory] = useState('Header banner');
     const [newBannerUrl, setNewBannerUrl] = useState('');
     const [selectTime, setSelectTime] = useState(1);

     const showModal = () => {
          setActiveModal(!activeModal);
     };

     useEffect(() => {
          console.log(advertisement);
     }, [advertisement]);
     const handleSelectTime = (value) => {
          console.log(value);
          setSelectTime(value)
     };
     // console.log(formatDate(advertisement[0].start));

     const addPost = () => {
          if (newBannerText.trim() !== '' && newBannerUrl.trim() !== '') {
               setAdvertisement([...advertisement, { id: Date.now(), name: newBannerText,url:newBannerUrl, type: '', from: Date.now(), to: selectTime, category: newCategory, status: 'active', start: Date.now() }]);
               setNewBannerText('');
               setNewBannerUrl('');
          }
     };

     const handleCategorySelectChange = (value) => {
          setNewCategory(value);
     };

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

     const editBanner = (id, newName, newCategory, newUrl, time) => {
          setAdvertisement(advertisement.map(banner =>
               banner.id === id ? { ...banner, name: newName, category: newCategory, url: newUrl,to:time } : banner
          ));
     };


     const deleteBanner = (bannerId) => {
          const updatedBanners = advertisement.filter((banner) => banner.id !== bannerId);
          setAdvertisement(updatedBanners);
     };

     return (
          <div className="time-line__page">
               <div className="page-top-bar">
                    <div className="bar-actions">
                         <h2>Banner</h2>
                         <div onClick={showModal}><CustomButton /></div>
                         <CustomDropDown1 items={items}/>
                    </div>
                    <div className="bar-search">
                         <CustomSearch/>
                    </div>
               </div>
               <div className="page-data-table">
                    <div className="table-top">
                         <div className="option-adv-table">
                              <div className="table-right">
                                   <CustomCheckBox/><p className="image-table">Image</p><p>Project Name</p>
                                   <p style={{textAlign: 'center'}}>Type</p>
                                   <div className="table-date">
                                        <p>From</p>
                                        <p>Up to</p>
                                   </div>
                                   <p>Category</p>
                                   <p>Status</p>
                                   <p>Created</p>
                              </div>
                         </div>
                    </div>
                    <div className="table-content">
                         {advertisement.map((item, index) =>
                              <AdvTableLine deleteBanner={deleteBanner} editBanner={editBanner} item={item} key={index}  selectTime={handleSelectTime}/>
                         )}
                    </div>
               </div>
               <div className="pagination-wrap" style={{display: 'grid', justifyItems: 'end'}}>
                    <CustomPagination/>
               </div>
               <Custom_modal open={activeModal} close={showModal}>
                    <AddBannerForm
                         onSelect={handleCategorySelectChange}
                         setCat={setNewCategory}
                         bannerName={newBannerText}
                         setBannerName={setNewBannerText}
                         bannerUrl={newBannerUrl}
                         setBannerUrl={setNewBannerUrl}
                         click={addPost}
                         close={showModal}
                         selectTime={handleSelectTime}
                    />
               </Custom_modal>
          </div>
     );
};

export default TimeLineAdv;
