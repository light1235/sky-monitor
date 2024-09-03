"use client"
import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import CustomFrontInput from "@/components/main/custom-front-input";
import CustomFrontButton from "@/components/main/cutom_front_button";
import {Link} from '@/i18n/routing.public'
import * as Yup from "yup";
import './index.scss';
import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';


const SignUp = () => {
     const t = useTranslations();
     const locale = useLocale();
     const [isValidSingUp, setIsValidSingUp] = useState(false);

     const [formData, setFormData] = useState({
          siteName: '',
          email: '',
          password: '',
     });
     const validationSchema = Yup.object().shape({
          siteName: Yup.string().min(6, locale === 'en' ? 'Name must be at least 6 characters' : 'Имя должно состоять не менее чем из 6 символов').required(locale === "en" ? "Name should be required please" : 'Имя должно быть обязательным, пожалуйста'),
          email: Yup.string().email(locale === 'en' ? 'Invalid email address' : 'Неверный адрес электронной почты').required(locale === 'en' ? 'Email is required' : 'Электронная почта обязательна'),
          password: Yup.string().min(6, locale === 'en' ? 'Password must be at least 6 characters long' : 'Пароль должен состоять не менее чем из 6 символов').required(locale === 'en' ? 'Password is required' : 'Пароль обязателен'),
     });

     // t('header.langMenu')
     //
     useEffect(() => {
          console.log(formData, 'formData');
          // isValidSingUp && console.log('3333')
     }, [formData]);

     const handleFormSubmit = (values, {setSubmitting}) => {
          setFormData(values);
     };

     return (
          <section className="sing-up__page">
               <div className="sing-up__content">
                    <div className="content__form">
                         <div className="form-container">
                              <h1>{t('Login.sign')}</h1>
                              <h2>{t('Login.definition')}</h2>

                              <Formik
                                   initialValues={{siteName: '', email: '', password: ''}}
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
                                                  <p>{t('Login.name')}</p>
                                                  <Field as={CustomFrontInput} type="text" name="siteName"/>
                                                  <ErrorMessage name="siteName" component="div" className="inputError"/>
                                             </label>
                                             <label>
                                                  <p>{t('Login.email')}</p>
                                                  <Field as={CustomFrontInput} type="email" name="email"/>
                                                  <ErrorMessage name="email" component="div" className="inputError"/>
                                             </label>
                                             <label>
                                                  <p>{t('Login.password')}</p>
                                                  <Field as={CustomFrontInput} type="password" name="password"/>
                                                  <ErrorMessage name="password" component="div" className="inputError"/>
                                             </label>
                                             <CustomFrontButton disblad={isSubmitting} name={t('Login.buttonCreate')}/>
                                             <div className="google-authorization">{t('Login.buttonGoogle')}</div>
                                             <div className="ps-reset">{t('Login.description')}<Link
                                                  href="/login">{t('Login.logLink')}</Link>
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
