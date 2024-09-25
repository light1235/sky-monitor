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
import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';



const BannerForm = () => {
     const t = useTranslations();
     const locale = useLocale();
     const [isValid, setIsValid] = useState(false);
     const [periodPlaceholder, setPeriodPlaceholder] = useState('');
     const [category, setCategory] = useState('1');

     const [formData, setFormData] = useState({
          siteName: '',
          email:'',
          siteUrl:'',
          selectedPeriodOption: '7',
          selectedCategoryOption: '1'
     });

     const validationSchema = Yup.object().shape({
          siteName: Yup.string().min(8,locale === 'en'? 'Site name must be at least 8 characters':'Название сайта должно состоять не менее чем из 6 символов').required(locale === 'en'?"Site name should be required please":'Название сайта обязательно'),
          // password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
          siteUrl:Yup.string().min(8).required(locale === 'en' ? "Site url should be required please":'Адрес сайта обязательно'),
          email: Yup.string().email(locale === 'en' ?'Invalid email address':'Неверный адрес электронной почты').required(locale === 'en' ?'Email is required':'Электронная почта обязательна'),
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
          setCategory(value);
     };

     let selectPeriod = [
          { value: '7', label: locale === 'en' ? `1 week ${periodPlaceholder === '15$'?'15$': '10$'}` :`1 неделя ${periodPlaceholder === '15$'?'15$': '10$'}` },
          { value: '14', label: locale === 'en' ? `2 weeks ${periodPlaceholder === '15$' ?'30$':'20$'}` :`2 недели  ${periodPlaceholder === '15$' ?'30$':'20$'}` },
          { value: '21', label: locale === 'en' ? `3 weeks ${periodPlaceholder === '15$' ?'45$':'30$'}` :`3 недели ${periodPlaceholder === '15$' ?'45$':'30$'}` },
          { value: '28', label: locale === 'en' ? `4 weeks ${periodPlaceholder === '15$' ?'60$':'40$'}` :`4 недели ${periodPlaceholder === '15$' ?'60$':'40$'}` },
     ]
     let selectCategory = [
          { value: '1', label:locale === 'en' ? 'Header Banner':'Верхний Баннер' },
          { value: '2', label: locale === 'en' ?'Content Banner':'Контент Баннер' },
     ]
     useEffect(() => {
          if (category === '1') {
               setPeriodPlaceholder('15$');
          } else if (category === '2') {
               setPeriodPlaceholder('10$');
          }
     }, [category]);

     return (
          <div className="Banner-Form">
               <div className="Banner-Form__content">
                    <div  className={isValid ? 'content-left validate-active' : 'content-left'}>
                         <div className="left-container">
                              {!isValid &&
                                   <>
                                        <h2>{t('bannerWindow.h2')}</h2>
                                        <h3>{t('bannerWindow.h3')}</h3>
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
                                                            {/*{t('bannerWindow.name')}*/}
                                                            <p>{t('bannerWindow.name')}</p>
                                                            <Field as={CustomFrontInput} type="text" name="siteName"
                                                                   placeholder={locale === 'en'?'Enter site name':'Введите название сайта'}/>
                                                            <ErrorMessage className="inputError" name="siteName"
                                                                          component="div"></ErrorMessage>
                                                       </label>
                                                       <label>
                                                            <p>{t('bannerWindow.url')}</p>
                                                            <Field as={CustomFrontInput} type="text" name="siteUrl"
                                                                   placeholder={locale === 'en'?'Enter site url':'Введите адрес сайта'}/>
                                                            <ErrorMessage className="inputError" name="siteUrl"
                                                                          component="div"/>
                                                       </label>
                                                       {/*{category == 1 ?'369x170' : '615x90'}*/}
                                                       <CustomFrontUpload/>
                                                       <label>
                                                            <p>{t('bannerWindow.email')}</p>
                                                            <Field as={CustomFrontInput} type="email" name="email"
                                                                   placeholder={locale === 'en'? 'Enter your email' : 'Введите электронную почту'}/>
                                                            <ErrorMessage className="inputError" name="email"
                                                                          component="div"/>
                                                       </label>
                                                       <label>
                                                            <p>{t('bannerWindow.category')}</p>
                                                            <CustomFrontSelect onSelect={handleCategorySelectChange}
                                                                               placeholder={locale === 'en'?'Header banner':'Верхний Баннер'}
                                                                               Data={selectCategory}/>
                                                       </label>
                                                       <label>
                                                            <p>{t('bannerWindow.period')}</p>
                                                            <CustomFrontSelect onSelect={handlePeriodSelectChange}
                                                                               placeholder={locale === "en" ? `price per week ${periodPlaceholder}`:`цена за неделю ${periodPlaceholder}`}
                                                                               Data={selectPeriod}/>
                                                       </label>
                                                       <CustomFrontButton name={locale === 'en'? 'Move to payment':'К оплате'} disblad={isSubmitting}/>
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
