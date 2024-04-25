"use client"
import React, {useState} from 'react';
import './index.scss';
import CustomFrontInput from "@/components/main/custom-front-input";
import CustomTextArea from "@/components/main/cutom-text-area";
import CustomFrontButton from "@/components/main/cutom_front_button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import {Input} from "antd";
import PopUpForm from "@/components/main/pop-up-form";
import Banner_form from "@/components/main/Banner_form";
import BannerForm from "@/components/main/Banner_form";



const Add_pop_up = () => {

     const [formData, setFormData] = useState({
          username: '',
          email: '',
          description:'',
          url:'',
          // ... другие поля формы
     });
     const handleSubmit = (event) => {
          event.preventDefault();
          console.log('Отправленные данные:', formData);
     };

     return (
          <div className="pop-up__page">
               {/*<PopUpForm />*/}
               <BannerForm/>
{/*               <div className="pop-up__page-content">*/}
{/*                    <div className="content-left">*/}
{/*                         <div className="left-container">*/}
{/*                              <h2>Pop-Up</h2>*/}
{/*                              <h3>Embark on the unknown path!</h3>*/}
{/*                              <form onSubmit={handleSubmit}>*/}

{/*                                   <label>*/}
{/*                                        <p>Site name</p>*/}
{/*                                        <CustomFrontInput  placeholder="Enter site name" name={'username'}*/}
{/*                                                          formData={formData.username} setFormData={setFormData}/>*/}
{/*                                   </label>*/}
{/*                                   <label>*/}
{/*                                        <p>Description*</p>*/}
{/*                                        <CustomTextArea name={'description'}  placeholder="Advertising will be checked and those news that*/}
{/*do not relate to the format of the site will*/}
{/*not be published"  formData={formData.description} setFormData={setFormData}  />*/}
{/*                                   </label>*/}
{/*                                   <label>*/}
{/*                                        <p>Site Url</p>*/}
{/*                                        <CustomFrontInput placeholder="Enter site url" formData={formData.url}*/}
{/*                                                          setFormData={setFormData} name={'url'} />*/}
{/*                                   </label>*/}
{/*                                   <label>*/}
{/*                                        <p>Email</p>*/}
{/*                                        <CustomFrontInput placeholder="Email" formData={formData.username}*/}
{/*                                                          setFormData={setFormData} name={'email'}/>*/}
{/*                                   </label>*/}
{/*                                   <label>*/}
{/*                                        <p>Period</p>*/}
{/*                                        <CustomFrontInput placeholder="Price per 2 days 7$" dis={true}/>*/}
{/*                                   </label>*/}
{/*                                   <CustomFrontButton/>*/}
{/*                              </form>*/}
{/*                         </div>*/}
{/*                    </div>*/}
{/*                    <div className="content-right">2</div>*/}
{/*               </div>*/}
          </div>
     );
};

export default Add_pop_up;


