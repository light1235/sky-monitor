"use client"
import React, { useState, useEffect } from 'react';
import './index.scss';
import CustomFrontInput from "@/components/main/custom-front-input";
import CustomFrontSelect from "@/components/main/custom_front_select";
import CustomFrontButton from "@/components/main/cutom_front_button";

const PinRaiseForm = () => {
     const [period, setPeriod] = useState('7');
     const [category, setCategory] = useState('1');
     const [periodPlaceholder, setPeriodPlaceholder] = useState(''); // State for the placeholder

     const [formData, setFormData] = useState({
          yourListing: '',
          selectedPeriodOption: period,
          selectedCategoryOption: category
     });

     const handlePeriodSelectChange = (value) => {
          setPeriod(value);
     };

     const handleCategorySelectChange = (value) => {
          setCategory(value);
     };

     const selectPeriod = [
          { value: '7', label: '1 week' },
          { value: '14', label: '2 weeks' },
          { value: '21', label: '3 weeks' },
          { value: '28', label: '4 weeks' }
     ];

     const selectCategory = [
          { value: '1', label: 'Pin your listing' },
          { value: '2', label: 'Raise your listing' }
     ];

     const handleSubmit = (event) => {
          event.preventDefault();
          setFormData(prevFormData => ({
               ...prevFormData,
               selectedCategoryOption: category,
               selectedPeriodOption: period
          }));
     };

     // Update the period placeholder when the category changes
     useEffect(() => {
          if (category === '1') {
               setPeriodPlaceholder('100');
          } else if (category === '2') {
               setPeriodPlaceholder('40');
          }
     }, [category]); // Trigger update when category changes

     return (
          <div className="pin-raise-form">
               <div className="pin-raise-form--content">
                    <div className="content-left">
                         <div className="left-container">
                              <>
                                   <h2>Pin or Raise Service</h2>
                                   <h3>Become an eternal light for others!</h3>
                              </>
                              <form onSubmit={handleSubmit}>
                                   <>
                                        <label className="front-dashed front-bold">
                                             <p>Your Listing</p>
                                             <CustomFrontInput placeholder={'Razzelton'} name="siteUrl" dis={true} />
                                        </label>
                                        <label>
                                             <p>Service</p>
                                             <CustomFrontSelect
                                                  onSelect={handleCategorySelectChange}
                                                  placeholder="Select Service"
                                                  Data={selectCategory}
                                             />
                                        </label>
                                        <label>
                                             <p>Period</p>
                                             <CustomFrontSelect
                                                  onSelect={handlePeriodSelectChange}
                                                  placeholder={`price per week ${periodPlaceholder}`}
                                                  Data={selectPeriod}
                                             />
                                        </label>
                                        <CustomFrontButton />
                                   </>
                              </form>
                         </div>
                    </div>
                    <div className="content-right"></div>
               </div>
          </div>
     );
};

export default PinRaiseForm;
