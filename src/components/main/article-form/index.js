"use client"
import React, {useState} from 'react';
import './index.scss'
import {ErrorMessage, Field, Form, Formik} from "formik";
import CustomFrontInput from "@/components/main/custom-front-input";
import CustomFrontSelect from "@/components/main/custom_front_select";
import CustomFrontButton from "@/components/main/cutom_front_button";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
     siteName: Yup.string().min(8, 'Site name must be at least 8 characters').required("First Name should be required please"),
});

const ArticleForm = () => {

     const [isValid, setIsValid] = useState(false);

     const [formData, setFormData] = useState({
          siteName: '',
          yourListing:'',
          selectedPeriodOption: '7',
          selectedCategoryOption: '1'
     });

     const handleFormSubmit = (values, { setSubmitting }) => {
          setFormData({ ...values, selectedPeriodOption: formData.selectedPeriodOption, selectedCategoryOption: formData.selectedCategoryOption });
          setSubmitting(false);
     };

     const handlePeriodSelectChange = (value) => {
          setFormData({ ...formData, selectedPeriodOption: value });
     };

     const handleCategorySelectChange = (value) => {
          setFormData({ ...formData, selectedCategoryOption: value });
     };

     let selectPeriod = [
          { value: '7', label: '1 week' },
          { value: '14', label: '2 week' },
          { value: '21', label: '3 week' },
          { value: '28', label: '4 week' },
     ]
     let selectCategory = [
          { value: '1', label: 'Pin Article' },
     ]

     return (
          <div className="article-form">
               <div className="article-content">
                    <div className="content-left">
                         <div className="left-container">
                              {!isValid &&
                                   <>
                                        <h2>Article Pin Service</h2>
                                        <h3>Embark on the unknown path!</h3>
                                   </>
                              }
                              <Formik
                                   initialValues={{siteName: '', ourListing: '',}}
                                   validationSchema={validationSchema}
                                   onSubmit={(values, actions) => {
                                        actions.setSubmitting(true);
                                        actions.validateForm().then((errors) => {
                                             if (Object.keys(errors).length === 0) {
                                                  handleFormSubmit(values, actions);
                                                  setIsValid(true);

                                             } else {
                                                  actions.setSubmitting(false);
                                                  setIsValid(false);
                                             }
                                        });
                                   }}
                              >

                                   {({isSubmitting}) => (
                                        <Form>
                                             {isValid ? <>Valid</> :
                                                  <>
                                                       <label>
                                                            <p>Company</p>
                                                            <Field as={CustomFrontInput} type="text" name="siteName"
                                                                   placeholder={'Enter company name'}/>
                                                            <ErrorMessage className="inputError" name="siteName"
                                                                          component="div"></ErrorMessage>
                                                       </label>
                                                       <label className="front-dashed">
                                                            <p>Your Listing</p>
                                                            <Field as={CustomFrontInput} type="text" name="siteUrl"
                                                                   placeholder={'Razzelton'} dis={true}/>
                                                            <ErrorMessage className="inputError" name="ourListing"
                                                                          component="div"/>
                                                       </label>
                                                       <label>
                                                            <p>Service</p>
                                                            <CustomFrontSelect onSelect={handleCategorySelectChange}
                                                                               placeholder="Pin Article"
                                                                               Data={selectCategory}/>
                                                       </label>
                                                       <label>
                                                            <p>Period</p>
                                                            <CustomFrontSelect onSelect={handlePeriodSelectChange}
                                                                               placeholder="Price per week 7$"
                                                                               Data={selectPeriod}/>
                                                       </label>
                                                       <CustomFrontButton disblad={isSubmitting}/>
                                                  </>
                                             }
                                        </Form>
                                   )}
                              </Formik>
                         </div>
                    </div>
                    <div className="content-right">

                    </div>
               </div>
          </div>
     );
};

export default ArticleForm;
