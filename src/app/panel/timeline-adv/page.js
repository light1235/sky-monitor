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
          {name:'Razzelton',type:'',from:'',to:'',category:'Header-banner',status:'active',start:Date.now(),id:'1'},
          {name:'Espino',type:'',from:'',to:'',category:'Content-banner',status:'active',start:Date.now(),id:'2'},
          {name:'SaveAssets',type:'',from:'',to:'',category:'Header-banner',status:'deactivate',start:Date.now(),id:'3'},
          {name:'Devor',type:'',from:'',to:'',category:'Content-banner',status:'active',start:Date.now(),id:'4'},
     ]);
     const [newBannerText, setNewBannerText] = useState('');

     const showModal = () => {
          setActiveModal(!activeModal);
     };

     const addPost = () => {
          if (newBannerText.trim() !== '') {
               setAdvertisement([...advertisement, { id: Date.now(), name: newBannerText, type: '', from: '', to: '', category: '', status: 'active', start: Date.now() }]);
               setNewBannerText('');
          }
     };
     useEffect(() => {
          console.log(newBannerText);
     }, [newBannerText]);

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
     const editBanner = (id, newName) => {
          setAdvertisement(advertisement.map(banner => banner.id === id ? { ...banner, name: newName } : banner));
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
                                   <p>Status</p>
                                   <p>Published</p>
                              </div>
                         </div>
                    </div>
                    <div className="table-content">
                         {advertisement.map( (item,index) =>
                              <AdvTableLine deleteBanner={deleteBanner}   editBanner={editBanner} item={item} key={index}/>
                         )}
                    </div>
               </div>
               <div className="pagination-wrap" style={{display: 'grid', justifyItems: 'end'}}>
                    <CustomPagination/>
               </div>
               <Custom_modal open={activeModal} close={showModal}>
                    <AddBannerForm
                         inner={newBannerText}
                         setInner={setNewBannerText}
                         click={addPost}
                         close={showModal}
                    />
               </Custom_modal>
          </div>
     );
};

export default TimeLineAdv;
