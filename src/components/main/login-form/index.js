"use client"
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from 'antd';
import CustomFrontInput from "@/components/main/custom-front-input";

const validationSchema = Yup.object().shape({
     email: Yup.string().email('Invalid email address').required('Email is required'),
     password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
     sora: Yup.string().email('Invalid email address').required('Email is required'),
});

const LoginForm = () => {
     const [formData, setFormData] = useState({
          email: '',
          password: '',
          sora:'',
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
          <div>


          <Formik
               initialValues={{ email: '', password: '',sora:'' }}
               validationSchema={validationSchema}
               onSubmit={(values, actions) => {
                    actions.setSubmitting(true);
                    actions.validateForm().then((errors) => {
                         if (Object.keys(errors).length === 0) {
                              handleFormSubmit(values, actions);
                         } else {
                              actions.setSubmitting(false);
                         }
                    });
               }}
          >
               {({ isSubmitting }) => (
                    <Form>
                         <label>
                             <p>Email</p>
                              <Field as={CustomFrontInput} type="email" name="email"/>
                              <ErrorMessage name="email" component="div"/>
                         </label>
                         <div>
                              <label htmlFor="password">Password</label>
                              <Field as={CustomFrontInput} type="password" name="password"/>
                              <ErrorMessage name="password" component="div"/>
                         </div>
                         <div>
                              <label htmlFor="email">Sora</label>
                              <Field as={CustomFrontInput} type="email" name="sora"/>
                              <ErrorMessage name="email" component="div"/>
                         </div>
                         <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                              Submit
                         </Button>
                    </Form>
               )}
          </Formik>
          </div>
     );
};

export default LoginForm;
