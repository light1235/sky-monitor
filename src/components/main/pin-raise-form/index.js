"use client"
import React, { useState, useEffect } from 'react';
import './index.scss';
import CustomFrontInput from "@/components/main/custom-front-input";
import CustomFrontSelect from "@/components/main/custom_front_select";
import CustomFrontButton from "@/components/main/cutom_front_button";
import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';

const PinRaiseForm = () => {
     const t = useTranslations();
     const locale = useLocale();
     const [period, setPeriod] = useState('7');
     const [category, setCategory] = useState('1');
     const [periodPlaceholder, setPeriodPlaceholder] = useState(''); // State for the placeholder

     const [formData, setFormData] = useState({
          yourListing: '',
          selectedPeriodOption: period,
          selectedCategoryOption: category
     });

     const handlePeriodSelectChange = (value) => {
          setPeriod(value);
     };

     const handleCategorySelectChange = (value) => {
          setCategory(value);
     };

     const selectPeriodOptions = [
          { value: '7', label: locale === "en" ? `1 week ${periodPlaceholder === '100' && '100$'}`:`1 неделя ${periodPlaceholder === '100' && '100$'}` },
          { value: '14', label: locale === "en" ? `2 weeks ${periodPlaceholder === '100' && '200$'}`:`2 недели ${periodPlaceholder === '100' && '200$'}` },
          { value: '21', label: locale === "en" ? `3 weeks ${periodPlaceholder === '100' && '300$'}`:`3 недели ${periodPlaceholder === '100' && '300$'}` },
          { value: '28', label: locale === "en" ? `4 weeks ${periodPlaceholder === '100' && '400$'}`:`4 недели ${periodPlaceholder === '100' && '400$'}` }
     ];

     const singlePeriodOption = [
          { value: '1', label: locale === "en" ? `price per one-time raise ${periodPlaceholder}$` : `цена за поднятие ${periodPlaceholder}$` }
     ];

     const selectPeriod = category === '2' ? singlePeriodOption : selectPeriodOptions;

     const selectCategory = [
          { value: '1', label: locale === "en" ? 'Pin your listing' :'Закрепить вашу рекламу' },
          { value: '2', label: locale === "en" ? 'Raise your listing':'Поднять ваше объявление' }
     ];

     const handleSubmit = (event) => {
          event.preventDefault();
          setFormData(prevFormData => ({
               ...prevFormData,
               selectedCategoryOption: category,
               selectedPeriodOption: period
          }));
     };

     useEffect(() => {
          if (category === '1') {
               setPeriodPlaceholder('100');
               setPeriod(selectPeriodOptions[0].value);
          } else if (category === '2') {
               setPeriodPlaceholder('40');
               setPeriod(singlePeriodOption[0].value);
          }
     }, [category]);


     const periodPlaceholderText = locale === "en"
          ? `price per ${category === '1' ? 'week' : 'one-time raise'} ${periodPlaceholder}$`
          : `цена за ${category === '1' ? 'неделю' : 'поднятие'} ${periodPlaceholder}$`;

     return (
          <div className="pin-raise-form">
               <div className="pin-raise-form--content">
                    <div className="content-left">
                         <div className="left-container">
                              <h2>{t('pinRaiseWindow.h2')}</h2>
                              <h3>{t('pinRaiseWindow.h3')}</h3>
                              <form onSubmit={handleSubmit}>
                                   <label className="front-dashed front-bold">
                                        <p>{t('pinRaiseWindow.list')}</p>
                                        <CustomFrontInput placeholder={'Razzelton'} name="siteUrl" dis={true} />
                                   </label>
                                   <label>
                                        <p>{t('pinRaiseWindow.service')}</p>
                                        <CustomFrontSelect
                                             onSelect={handleCategorySelectChange}
                                             placeholder={locale === 'en' ? 'Pin your listing' : 'Закрепить вашу рекламу'}
                                             Data={selectCategory}
                                        />
                                   </label>
                                   <label>
                                        <p>{t('pinRaiseWindow.period')}</p>
                                        <CustomFrontSelect
                                             onSelect={handlePeriodSelectChange}
                                             placeholder={periodPlaceholderText}
                                             Data={selectPeriod}
                                        />
                                   </label>
                                   <CustomFrontButton name={locale === 'en' ? 'Move to payment' : 'К оплате'} />
                              </form>
                         </div>
                    </div>
                    <div className="content-right"></div>
               </div>
          </div>
     );
};

export default PinRaiseForm;
