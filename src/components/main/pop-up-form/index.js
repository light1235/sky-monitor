"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomFrontButton from "@/components/main/cutom_front_button";
import CustomFrontInput from "@/components/main/custom-front-input";
import CustomTextArea from "@/components/main/cutom-text-area";
import LOGO from '/src/assets/logo-2.svg'
import Image from "next/image";
import CustomFrontUpload from "@/components/main/custom_front_upload";
import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';



const PopUpForm = () => {
     const t = useTranslations();
     const locale = useLocale();
     const [isValid, setIsValid] = useState(false);

     const [formData, setFormData] = useState({
          siteName: '',
          description:'',
          siteUrl:'',
     });


     const validationSchema = Yup.object().shape({
          siteName: Yup.string().min(8, locale === 'en' ?'Site name must be at least 8 characters':'Имя сайта должно состоять не менее чем из 8 символов').required(locale === 'en' ?"Site Name should be required please":'Имя сайта обязательно'),
          // password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
          description: Yup.string().min(8).required(locale === 'en' ? "Description should be required please":'Описание обязательно'),
          siteUrl:Yup.string().min(8).required(locale === 'en' ?"Site Url should be required please":'Адрес сайта обязательно'),
          email: Yup.string().email(locale === 'en' ?'Invalid email address':'Неверный адрес электронной почты').required(locale === 'en' ?'Email is required':'Электронная почта обязательна'),
     });

     const handleFormSubmit = (values,  { setSubmitting }) => {
          setFormData(values);
          setSubmitting(false);
     };
     useEffect(() => {
          console.log(formData, 'formData');
     }, [formData]);

     return (
          <div className="Pop-Up-Form">
               <div className="Pop-Up-Form__content">
                    <div  className={isValid ? 'content-left validate-active' : 'content-left'}>
                         <div className="left-container">
                              {!isValid &&
                                   <>
                                        <h2>{t('popUp.h2')}</h2>
                                        <h3>{t('popUp.h3')}</h3>
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
                                                      <p>{t('popUp.name')}</p>
                                                      <Field as={CustomFrontInput} type="text" name="siteName"
                                                             placeholder={locale === 'en' ?'Enter site name':'Введите имя веб-сайта'}/>
                                                      <ErrorMessage className="inputError" name="siteName"
                                                                    component="div"></ErrorMessage>
                                                 </label>
                                                 <label>
                                                      <p>{t('popUp.description')}</p>
                                                      <Field as={CustomTextArea} type="text" name="description"
                                                             placeholder={locale === 'en' ?'Advertising will be checked and those news that do not relate to the format of the site will not be published':'Реклама будет проверяться, и те новости, которые не относятся к формату сайта, не будут опубликованы'}/>
                                                      <ErrorMessage className="inputError" name="description"
                                                                    component="div"/>
                                                 </label>
                                                 {/*<CustomFrontUpload />*/}
                                                 <label>
                                                      <p>{t('popUp.url')}</p>
                                                      <Field as={CustomFrontInput} type="text" name="siteUrl"
                                                             placeholder={locale === 'en' ?'Enter site url':'Введите адрес сайта'}/>
                                                      <ErrorMessage className="inputError" name="siteUrl"
                                                                    component="div"/>
                                                 </label>
                                                 <label>
                                                      <p>{t('popUp.email')}</p>
                                                      <Field as={CustomFrontInput} type="email" name="email"
                                                             placeholder={locale === 'en' ?'Enter email':'Введите электронную почту'}/>
                                                      <ErrorMessage className="inputError" name="email"
                                                                    component="div"/>
                                                 </label>
                                                 <label>
                                                      <p>{t('popUp.period')}</p>
                                                      <Field as={CustomFrontInput} type="text" name="period"
                                                             placeholder={locale === 'en' ?'Price per 2 days 30$':'Цена за 2 дня показа - 30$'} dis={true}/>
                                                 </label>
                                                 <CustomFrontButton name={locale === 'en' ?'Move to payment':'К оплате'} disblad={isSubmitting}/>
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
