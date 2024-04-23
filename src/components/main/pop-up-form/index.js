"use client"
import React, {useState} from 'react';
import './index.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomFrontButton from "@/components/main/cutom_front_button";
import CustomFrontInput from "@/components/main/custom-front-input";
import CustomTextArea from "@/components/main/cutom-text-area";
import LOGO from '/src/assets/logo-2.svg'
import Image from "next/image";
import CustomFrontUpload from "@/components/main/custom_front_upload";

const validationSchema = Yup.object().shape({
     siteName: Yup.string().min(8, 'Site name must be at least 8 characters').required("First Name should be required please"),
     // password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
     description: Yup.string().min(8).required("First Name should be required please"),
     siteUrl:Yup.string().min(8).required("First Name should be required please"),
     email: Yup.string().email('Invalid email address').required('Email is required'),
});

const PopUpForm = () => {
     const [isValid, setIsValid] = useState(false);

     const [formData, setFormData] = useState({
          siteName: '',
          description:'',
          siteUrl:'',
     });
     const handleFormSubmit = (values,  { setSubmitting }) => {
          setFormData(values);

          setTimeout(() => {
               alert(JSON.stringify(values, null, 2));
               setSubmitting(false);
               console.log(formData,'formData');
          }, 400);
     };

     return (
          <div className="Pop-Up-Form">
               <div className="Pop-Up-Form__content">
                    <div  className={isValid ? 'content-left validate-active' : 'content-left'}>
                         <div className="left-container">
                              {!isValid &&
                                   <>
                                        <h2>Pop-Up</h2>
                                        <h3>Embark on the unknown path!</h3>
                                   </>
                              }
                              <Formik
                                   initialValues={{siteName: '', description: '', siteUrl: '', email: '',}}
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
                                                      <p>Description*</p>
                                                      <Field as={CustomTextArea} type="text" name="description"
                                                             placeholder="Advertising will be checked and those news that
do not relate to the format of the site will
not be published"/>
                                                      <ErrorMessage className="inputError" name="description"
                                                                    component="div"/>
                                                 </label>
                                                 <CustomFrontUpload />
                                                 <label>
                                                      <p>Site Url</p>
                                                      <Field as={CustomFrontInput} type="text" name="siteUrl"
                                                             placeholder={'Enter site url'}/>
                                                      <ErrorMessage className="inputError" name="siteUrl"
                                                                    component="div"/>
                                                 </label>
                                                 <label>
                                                      <p>Email</p>
                                                      <Field as={CustomFrontInput} type="email" name="email"
                                                             placeholder={'Enter site url'}/>
                                                      <ErrorMessage className="inputError" name="email"
                                                                    component="div"/>
                                                 </label>
                                                 <label>
                                                      <p>Period</p>
                                                      <Field as={CustomFrontInput} type="text" name="period"
                                                             placeholder={'Price per 2 days 7$'} dis={true}/>
                                                 </label>
                                                 <CustomFrontButton disblad={isSubmitting}/>
                                            </>
                                       }
                                   </Form>
                              )}
                         </Formik>
                         </div>
                    </div>
                    <div className="content-right"></div>
               </div>

          </div>
     );
};

export default PopUpForm;
