"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomFrontButton from "@/components/main/cutom_front_button";
import CustomFrontInput from "@/components/main/custom-front-input";
import LOGO from '/src/assets/logo-2.svg'
import Image from "next/image";
import CustomFrontUpload from "@/components/main/custom_front_upload";
import CustomFrontSelect from "@/components/main/custom_front_select";

const validationSchema = Yup.object().shape({
     siteName: Yup.string().min(8, 'Site name must be at least 8 characters').required("First Name should be required please"),
     // password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
     siteUrl:Yup.string().min(8).required("First Name should be required please"),
     email: Yup.string().email('Invalid email address').required('Email is required'),
});

const BannerForm = () => {
     const [isValid, setIsValid] = useState(false);

     const [formData, setFormData] = useState({
          siteName: '',
          email:'',
          siteUrl:'',
          selectedPeriodOption: '7',
          selectedCategoryOption: '1'
     });


     // useEffect(() => {
     //      console.log(formData, 'formData');
     // }, [formData]);

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
          { value: '1', label: 'Header Banner' },
          { value: '2', label: 'Content Banner' },
     ]

     return (
          <div className="Banner-Form">
               <div className="Banner-Form__content">
                    <div  className={isValid ? 'content-left validate-active' : 'content-left'}>
                         <div className="left-container">
                              {!isValid &&
                                   <>
                                        <h2>Banner</h2>
                                        <h3>Embark on the unknown path!</h3>
                                   </>
                              }
                              <Formik
                                   initialValues={{siteName: '',  siteUrl: '', email: '',}}
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
                                             {isValid ? <Image src={LOGO} alt={'logo'} priority={false}></Image> :
                                                  <>
                                                       <label>
                                                            <p>Site name</p>
                                                            <Field as={CustomFrontInput} type="text" name="siteName"
                                                                   placeholder={'Enter site name'}/>
                                                            <ErrorMessage className="inputError" name="siteName"
                                                                          component="div"></ErrorMessage>
                                                       </label>
                                                       <label>
                                                            <p>Site Url</p>
                                                            <Field as={CustomFrontInput} type="text" name="siteUrl"
                                                                   placeholder={'Enter site url'}/>
                                                            <ErrorMessage className="inputError" name="siteUrl"
                                                                          component="div"/>
                                                       </label>
                                                       <CustomFrontUpload/>

                                                       <label>
                                                            <p>Email</p>
                                                            <Field as={CustomFrontInput} type="email" name="email"
                                                                   placeholder={'Enter your email'}/>
                                                            <ErrorMessage className="inputError" name="email"
                                                                          component="div"/>
                                                       </label>
                                                       <label>
                                                            <p>Period</p>
                                                            <CustomFrontSelect onSelect={handlePeriodSelectChange}
                                                                               placeholder="Price per week 7$"
                                                                               Data={selectPeriod}/>
                                                       </label>
                                                       <label>
                                                            <p>Category</p>
                                                            <CustomFrontSelect onSelect={handleCategorySelectChange}
                                                                               placeholder="Header banner"
                                                                               Data={selectCategory}/>
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

export default BannerForm;
