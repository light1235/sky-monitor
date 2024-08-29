"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'
import CustomFrontSelect from "@/components/main/custom_front_select";
import CustomFrontButton from "@/components/main/cutom_front_button";
import CustomFrontInput from "@/components/main/custom-front-input";



const ArticleForm = () => {

     const [isValid, setIsValid] = useState(false);
     const [period, setPeriod] = useState('');

     const [formData, setFormData] = useState({
          yourListing:'',
          selectedPeriodOption: '7',
          selectedCategoryOption: '1'
     });
     useEffect(() => {
          console.log(formData);
     },[formData])

     const handleSubmit = (event) => {
          event.preventDefault();
          setFormData((prevFormData) => ({
               ...prevFormData,
               selectedPeriodOption: period
          }));
     };

     const handlePeriodSelectChange = (value) => {
          setPeriod(value)
     };


     let selectPeriod = [
          { value: '7', label: '1 week' },
          { value: '14', label: '2 week' },
          { value: '21', label: '3 week' },
          { value: '28', label: '4 week' },
     ]

     return (
          <div className="article-form">
               <div className="article-content">
                    <div className="content-left">
                         <div className="left-container">
                              {!isValid &&
                                   <>
                                        <h2>Article Pin Service</h2>
                                        <h3>People need to know about the galaxy!</h3>
                                   </>
                              }
                                        <form onSubmit={handleSubmit}>
                                             <>
                                                  <label className="front-dashed front-bold">
                                                       <p>Your Listing</p>
                                                       <CustomFrontInput placeholder={'Razzelton'} name="siteUrl"
                                                                         dis={true}/>
                                                  </label>
                                                  <label className="front-read-only">
                                                       <p>Service</p>
                                                       <CustomFrontInput placeholder={'Pin Article'} name="siteUrl"
                                                                         readonly={false} dis={true}/>
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
                    <div className="content-right">

                    </div>
               </div>
          </div>
     );
};

export default ArticleForm;
