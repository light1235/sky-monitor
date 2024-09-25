"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'
import CustomFrontSelect from "@/components/main/custom_front_select";
import CustomFrontButton from "@/components/main/cutom_front_button";
import CustomFrontInput from "@/components/main/custom-front-input";
import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';


const ArticleForm = () => {
     const t = useTranslations();
     const locale = useLocale();
     const [isValid, setIsValid] = useState(false);
     const [period, setPeriod] = useState('');

     const [formData, setFormData] = useState({
          yourListing:'',
          selectedPeriodOption: '7',
          selectedCategoryOption: '1'
     });
     useEffect(() => {
          console.log(formData);
     },[formData])

     const handleSubmit = (event) => {
          event.preventDefault();
          setFormData((prevFormData) => ({
               ...prevFormData,
               selectedPeriodOption: period
          }));
     };

     const handlePeriodSelectChange = (value) => {
          setPeriod(value)
     };


     let selectPeriod = [
          { value: '7', label: locale === 'en' ? '1 weeks 70$' : '1 неделя 70$' },
          { value: '14', label: locale === 'en' ? '2 weeks 140$' : '2 недели 140$' },
          { value: '21', label:locale === 'en' ? '3 weeks 70$' : '3 недели 210$' },
          { value: '28', label: locale === 'en' ? '4 weeks 70$' : '4 недели 280$' },
     ]

     return (
          <div className="article-form">
               <div className="article-content">
                    <div className="content-left">
                         <div className="left-container">
                              {!isValid &&
                                   <>
                                        <h2>{t('articleWindow.h2')}</h2>
                                        <h3>{t('articleWindow.h3')}</h3>
                                   </>
                              }
                                        <form onSubmit={handleSubmit}>
                                             <>
                                                  <label className="front-dashed front-bold">
                                                       <p>{t('articleWindow.list')}</p>
                                                       <CustomFrontInput placeholder={'Razzelton'}
                                                                         dis={true}/>
                                                  </label>
                                                  <label className="front-read-only">
                                                       <p>{t('articleWindow.service')}</p>
                                                       <CustomFrontInput placeholder={locale === 'en' ? 'Pin article' : 'Закрепить статью'}
                                                                         readonly={false} dis={true}/>
                                                  </label>
                                                  <label>
                                                       <p>{t('articleWindow.period')}</p>
                                                       <CustomFrontSelect onSelect={handlePeriodSelectChange}
                                                                          placeholder={locale === 'en'? 'price per week 70$' : 'цена за неделю 70$'}
                                                                          Data={selectPeriod}/>
                                                  </label>
                                                  <CustomFrontButton name={locale === 'en' ? 'Move to payment' : 'К оплате'}/>
                                             </>

                                        </form>
                         </div>
                    </div>
                    <div className="content-right">

                    </div>
               </div>
          </div>
     );
};

export default ArticleForm;
