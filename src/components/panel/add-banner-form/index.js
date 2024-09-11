"use client"
import React, {useState} from 'react';
import './index.scss';
import CustomInput from "@/components/panel/custom-input";
import {Select} from "antd";
import CustomUpload from "@/components/panel/custom-upload";
import CustomButton from "@/components/panel/custom-button";

const AddBannerForm = ({inner, setInner, click = () => {}, close, onSelect, setCat }) => {
     const [selectedCategory, setSelectedCategory] = useState('Header banner');

     const handleCategoryChange = (value) => {
          // setSelectedCategory(value);
          setCat(value); // Directly updating parent state
     };

     const handleInputChange = (e) => {
          setInner(e.target.value);
     };

     return (
          <div className="panel-banner-form">
               <h2>Add Banner</h2>
               <label>
                    <p>Site name11</p>
                    <CustomInput  change={handleInputChange} placeholder="Enter site name"/>
               </label>
               <label>
                    <p>Site url</p>
                    <CustomInput placeholder="Enter site Url"/>
               </label>
               <p>Category</p>
               <Select
                    defaultValue="Select category..."
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
                    <label>
                         <p>Image Mobile</p>
                         <CustomUpload/>
                    </label>
                    <div onClick={click}><div onClick={close}><CustomButton name="Submit" width="150px" /></div></div>
               </div>
          </div>
     );
};

export default AddBannerForm;
