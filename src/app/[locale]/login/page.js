"use client"
import React, {useEffect, useState} from 'react';
import './index.scss';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomFrontButton from "@/components/main/cutom_front_button";
import CustomFrontInput from "@/components/main/custom-front-input";
import {Link} from '@/i18n/routing.public'
import CustomCheckBox from "@/components/panel/check-box";
import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';




const LoginPage = () => {
     const t = useTranslations();
     const locale = useLocale();
     const [isValidLogin, setIsValidLogin] = useState(false);

     const [formData, setFormData] = useState({
          email: '',
          password: '',
          forgot:'false',
     });

     const validationSchema = Yup.object().shape({
          email: Yup.string().email(locale === 'en' ?'Invalid email address':'Неверный адрес электронной почты').required(locale === 'en' ?'Email is required':'Электронная почта обязательна'),
          password: Yup.string().min(6, locale === 'en' ?'Password must be at least 6 characters long':'Пароль должен состоять не менее чем из 6 символов').required(locale === 'en' ?'Password is required':'Пароль обязателен'),
     });

     useEffect(() => {
          console.log(formData, 'formData');
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
                              <h1>{t('Register.title')}</h1>
                              <h2>{t('Register.description')}</h2>
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
                                                  <p>{t('Register.email')}</p>
                                                  <Field as={CustomFrontInput} type="email" name="email"/>
                                                  <ErrorMessage name="email" component="div" className="inputError"/>
                                             </label>
                                             <label>
                                                  <p>{t('Register.password')}</p>
                                                  <Field as={CustomFrontInput} type="password" name="password"/>
                                                  <ErrorMessage name="password" component="div" className="inputError"/>
                                             </label>
                                             <CustomFrontButton disblad={isSubmitting} name={t('Register.button')}/>
                                             <label className="login-check">
                                                  <CustomCheckBox onSelect={handleForgotChange}  />{t('Register.remember')}
                                             </label>
                                             <div className="form-separator"></div>
                                             <div className="ps-reset"><Link href="/reset">{t('Register.link')}</Link></div>
                                        </Form>
                                   )}
                              </Formik>
                         </div>
                    </div>
                    <div className="content__image">
                    </div>
               </div>
          </section>
     );
};

export default LoginPage;
