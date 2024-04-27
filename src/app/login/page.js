"use client"
import React, {useEffect, useState} from 'react';
import LoginForm from "@/components/main/login-form";
import './index.scss';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Button, Input} from "antd";
import CustomFrontButton from "@/components/main/cutom_front_button";
import CustomFrontInput from "@/components/main/custom-front-input";
import Link from "next/link";
import CustomCheckBox from "@/components/panel/check-box";


const validationSchema = Yup.object().shape({
     email: Yup.string().email('Invalid email address').required('Email is required'),
     password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

const LoginPage = () => {
     const [isValidLogin, setIsValidLogin] = useState(false);

     const [formData, setFormData] = useState({
          email: '',
          password: '',
          forgot:'false',
     });

     useEffect(() => {
          console.log(formData, 'formData');
          // isValidLogin && console.log('3333')
     }, [formData]);

     const handleFormSubmit = (values,  { setSubmitting }) => {
          setFormData(values);
          setFormData({ ...values, forgot: formData.forgot });
     };
     const handleForgotChange = (value) => {
          setFormData({ ...formData, forgot: value });
     };

     return (
          <section className="login__page">
               <div className="login__content">
                    <div className="content__form">
                         <div className="form-container">
                              <h1>Log in</h1>
                              <h2>Dive into the abyss!</h2>
                              <Formik
                                   initialValues={{ email: '', password: ''}}
                                   validationSchema={validationSchema}
                                   onSubmit={(values, actions) => {
                                        actions.setSubmitting(true);
                                        actions.validateForm().then((errors) => {
                                             if (Object.keys(errors).length === 0) {
                                                  handleFormSubmit(values, actions);
                                                  setIsValidLogin(true);
                                             } else {
                                                  actions.setSubmitting(false);
                                                  setIsValidLogin(false);
                                             }
                                        });
                                   }}
                              >
                                   {({ isSubmitting }) => (
                                        <Form>
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
                                             <CustomFrontButton disblad={isSubmitting} name={'Get Started'}/>
                                             <label className="login-check">
                                                  <CustomCheckBox onSelect={handleForgotChange} />Remember me
                                             </label>
                                             <div className="form-separator"></div>
                                             <div className="ps-reset"><Link href="">Forgot your password ?</Link></div>
                                        </Form>
                                   )}
                              </Formik>
                         </div>
                    </div>
                    <div className="content__image"></div>
               </div>
               {/*<LoginForm />*/}
          </section>
     );
};

export default LoginPage;
