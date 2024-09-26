"use client"
import React, {useState} from 'react';
import './index.scss';
import CustomInput from "@/components/panel/custom-input";
import {Select} from "antd";
import CustomUpload from "@/components/panel/custom-upload";
import CustomButton from "@/components/panel/custom-button";

const AddBannerForm = ({bannerName, setBannerName,bannerUrl,setBannerUrl, click = () => {}, close, onSelect, setCat}) => {
     const [selectedCategory, setSelectedCategory] = useState('Header banner');

     const handleCategoryChange = (value) => {
          setCat(value);
     };

     const handleInputChange = (e) => {
          setBannerName(e.target.value);
     };
     const handleInputUrl = (e) => {
          setBannerUrl(e.target.value);
     };

     return (
          <div className="panel-banner-form">
               <h2>Add Banner</h2>
               <label>
                    <p>Site name</p>
                    <CustomInput value={bannerName}  change={handleInputChange} placeholder="Enter site name"/>
               </label>
               <label>
                    <p>Site url</p>
                    <CustomInput  value={bannerUrl} change={handleInputUrl}  placeholder="Enter site Url"/>
               </label>
               <p>Category</p>
               <Select
                    defaultValue="Header banner"
                    style={{
                         width: 120,
                    }}
                    onChange={handleCategoryChange}
                    options={[
                         {
                              value: 'Header banner',
                              label: 'Header banner',
                         },
                         {
                              value: 'Content banner',
                              label: 'Content banner',
                         },
                    ]}
               />
               <p>Period</p>
               <Select
                    defaultValue="Select period..."
                    style={{
                         width: 120,
                    }}
                    onChange={() => {}}
                    options={[
                         {
                              value: '1 week',
                              label: '1',
                         },
                         {
                              value: '2 weeks',
                              label: '2',
                         },
                         {
                              value: '3 weeks',
                              label: '3',
                         },
                         {
                              value: '4 weeks',
                              label: '4',
                         },
                    ]}
               />
               <label>
                    <p>Image Desktop</p>
                    <CustomUpload/>
               </label>
               <div className="bottom-line">
                    <div onClick={click}><div onClick={close}><CustomButton name="Submit" width="150px" /></div></div>
               </div>
          </div>
     );
};

export default AddBannerForm;
