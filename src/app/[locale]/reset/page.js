"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import CustomFrontInput from "@/components/main/custom-front-input";
import CustomFrontButton from "@/components/main/cutom_front_button";



const validationSchema = Yup.object().shape({
     email: Yup.string().email('Invalid email address').required('Email is required'),

});
const ResetPage = () => {

     const [isValidSingUp, setIsValidSingUp] = useState(false);

     const [formData, setFormData] = useState({
          email: '',
     });
     //
     useEffect(() => {
          console.log(formData, 'formData');
          // isValidSingUp && console.log('3333')
     }, [formData]);

     const handleFormSubmit = (values,  { setSubmitting }) => {
          setFormData(values);
     };



     return (
          <section className="reset__page">
               <div className="reset__content">
                    <div className="content__form">
                         <div className="form-container">
                              <h1>Password Reset</h1>
                              <Formik
                                   initialValues={{ email: '',}}
                                   validationSchema={validationSchema}
                                   onSubmit={(values, actions) => {
                                        actions.setSubmitting(true);
                                        actions.validateForm().then((errors) => {
                                             if (Object.keys(errors).length === 0) {
                                                  handleFormSubmit(values, actions);
                                                  setIsValidSingUp(true);
                                             } else {
                                                  actions.setSubmitting(false);
                                                  setIsValidSingUp(false);
                                             }
                                        });
                                   }}
                              >
                                   {({isSubmitting}) => (
                                        <Form>
                                             <label>
                                                  <p>Email*</p>
                                                  <Field as={CustomFrontInput} type="email" name="email"/>
                                                  <ErrorMessage name="email" component="div" className="inputError"/>
                                             </label>
                                             <CustomFrontButton disblad={isSubmitting} name={'Continue'}/>
                                        </Form>
                                   )}
                              </Formik>

                         </div>
                    </div>
                    <div className="content__image"></div>
               </div>
          </section>
     );
};

export default ResetPage;
