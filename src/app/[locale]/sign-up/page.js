"use client"
import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import CustomFrontInput from "@/components/main/custom-front-input";
import CustomFrontButton from "@/components/main/cutom_front_button";
import CustomCheckBox from "@/components/panel/check-box";
import {Link} from '@/i18n/routing.public'
import * as Yup from "yup";
import './index.scss';


const validationSchema = Yup.object().shape({
     siteName: Yup.string().min(8, 'Site name must be at least 8 characters').required("Name should be required please"),
     email: Yup.string().email('Invalid email address').required('Email is required'),
     password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

const SignUp = () => {

     const [isValidSingUp, setIsValidSingUp] = useState(false);

     const [formData, setFormData] = useState({
          siteName:'',
          email: '',
          password: '',
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
          <section className="sing-up__page">
               <div className="sing-up__content">
                    <div className="content__form">
                         <div className="form-container">
                              <h1>Sing Up</h1>
                              <h2>Find your Space</h2>

                              <Formik
                                   initialValues={{siteName:'', email: '', password: ''}}
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
                                                  <p>Name*</p>
                                                  <Field as={CustomFrontInput} type="text" name="siteName"/>
                                                  <ErrorMessage name="siteName" component="div" className="inputError"/>
                                             </label>
                                             <label>
                                                  <p>Email*</p>
                                                  <Field as={CustomFrontInput} type="email" name="email"/>
                                                  <ErrorMessage name="email" component="div" className="inputError"/>
                                             </label>
                                             <label>
                                                  <p>Password*</p>
                                                  <Field as={CustomFrontInput} type="password" name="password"/>
                                                  <ErrorMessage name="password" component="div" className="inputError"/>
                                             </label>
                                             <CustomFrontButton disblad={isSubmitting} name={'Create Account'}/>
                                             <div className="google-authorization">Sing up with Google</div>
                                             <div className="ps-reset">Already have account ?<Link href="/login">Log in</Link>
                                             </div>
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

export default SignUp;
