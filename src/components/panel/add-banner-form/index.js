"use client"
import React from 'react';
import './index.scss'
import CustomInput from "@/components/panel/custom-input";
import {Select} from "antd";
import CustomUpload from "@/components/panel/custom-upload";
import CustomButton from "@/components/panel/custom-button";

const AddBannerForm = () => {

     const handleChange = (value) => {
          console.log(`selected ${value}`);
     };

     return (
          <div className="panel-banner-form">
               <h2>Add Banner</h2>
               <label>
                    <p>Site name</p>
                    <CustomInput placeholder="Enter site name"/>
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
                    onChange={handleChange}
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
                    defaultValue="Select category..."
                    style={{
                         width: 120,
                    }}
                    onChange={handleChange}
                    options={[
                         {
                              value: '1 week',
                              label: '1',
                         },
                         {
                              value: '2 week',
                              label: '2',
                         },
                         {
                              value: '3 week',
                              label: '3',
                         },
                         {
                              value: '4 week',
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

                    <CustomButton name="Submit" width="150px" />
               </div>
          </div>
     );
};

export default AddBannerForm;
