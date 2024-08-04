"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'
import CustomFrontInput from "@/components/main/custom-front-input";
import CustomFrontSelect from "@/components/main/custom_front_select";
import CustomFrontButton from "@/components/main/cutom_front_button";

const PinRaiseForm = () => {
     const [period, setPeriod] = useState('7');
     const [category, setCategory] = useState('1');


     const [formData, setFormData] = useState({
          yourListing:'',
          selectedPeriodOption: period,
          selectedCategoryOption: category
     });

     const handlePeriodSelectChange = (value) => {
          setPeriod(value)
     };

     const handleCategorySelectChange = (value) => {
          setCategory(value)
     };

     let selectPeriod = [
          { value: '7', label: '1 week' },
          { value: '14', label: '2 week' },
          { value: '21', label: '3 week' },
          { value: '28', label: '4 week' },
     ]
     let selectCategory = [
          { value: '1', label: 'Pin your listing' },
          { value: '2', label: 'Raise your listing' },
     ]

     const handleSubmit = (event) => {
          event.preventDefault();
          setFormData(prevFormData => ({
               ...prevFormData,
               selectedCategoryOption: category,
               selectedPeriodOption: period,
          }));
     };
     return (
          <div className="pin-raise-form">
               <div className="pin-raise-form--content">
                    <div className="content-left">
                         <div className="left-container">
                                   <>
                                        <h2>Pin or Raise Service</h2>
                                        <h3>Embark on the unknown path!</h3>
                                   </>
                              <form onSubmit={handleSubmit}>
                                   <>
                                        <label className="front-dashed front-bold">
                                             <p>Your Listing</p>
                                             <CustomFrontInput placeholder={'Razzelton'} name="siteUrl" dis={true}/>
                                        </label>
                                        <label>
                                             <p>Service</p>
                                             <CustomFrontSelect onSelect={handleCategorySelectChange}
                                                                placeholder="Pin"
                                                                Data={selectCategory}/>
                                        </label>
                                        <label>
                                             <p>Period</p>
                                             <CustomFrontSelect onSelect={handlePeriodSelectChange}
                                                                placeholder="Price per week 7$"
                                                                Data={selectPeriod}/>
                                        </label>
                                        <CustomFrontButton/>
                                   </>
                              </form>
                         </div>
                    </div>
                    <div className="content-right" ></div>
               </div>
          </div>
     );
};

export default PinRaiseForm;
