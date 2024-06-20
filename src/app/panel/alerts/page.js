"use client"
import React, {useState} from 'react';
import './index.scss'
import CustomButton from "@/components/panel/custom-button";
import CustomDropDown1 from "@/components/panel/drop-down";
import CustomSearch from "@/components/panel/custom-search";
import AlertsLine from "@/components/panel/alerts-line";
import CustomInput from "@/components/panel/custom-input";
import { Radio } from 'antd';
import CustomUpload from "@/components/panel/custom-upload";
import { Select, Space } from 'antd';

const AlertsItem = () => {

     const AlertStandardData = {
          type:'',
          article:'',
          description:'',
          link:'',
          hours:'',
          image:''
     }

     const [value, setValue] = useState(1);
     const onChange = (e) => {
          console.log('radio checked', e.target.value);
          setValue(e.target.value);
     };
     const handleChange = (value) => {
          console.log(`selected ${value}`);
     };

     return (
          <div className="alerts__page">
               <div className="page-top-bar">
                    <div className="bar-actions">
                         <h2>Alerts</h2>
                    </div>
               </div>
               <div className="page-content">
                    <div className="panel-block-form">
                          <div className="form-top-line">
                               <Radio.Group onChange={onChange} value={value}>
                                    <Radio value={1}><i className="icon-newspaper"></i> News</Radio>
                                    <Radio value={2}><i className="icon-audio-description"></i> ADS</Radio>
                                    <Radio value={3}><i className="icon-edit"></i>Scam</Radio>
                               </Radio.Group>
                               <CustomButton name={'Published'} />
                          </div>
                         <div className="form-content">
                              <label>
                                   <p>Article</p>
                                   <CustomInput value={value === 1 && 'news' || value === 2 && 'ads' || value === 3 && 'Scam detected!' } />
                              </label>
                              <label>
                                   <p>Description</p>
                                   <CustomInput/>
                              </label>
                              <label>
                                   <p>Link</p>
                                   <CustomInput/>
                              </label>
                         </div>
                         <div className="content-hours">
                              <p>Working hours</p>
                              <Select
                                   defaultValue="Select time..."
                                   style={{
                                        width: 120,
                                   }}
                                   onChange={handleChange}
                                   options={[
                                        {
                                             value: '12',
                                             label: '12',
                                        },
                                        {
                                             value: '24',
                                             label: '24',
                                        },
                                        {
                                             value: '36',
                                             label: '36',
                                        },
                                        {
                                             value: '48',
                                             label: '48',
                                        },
                                   ]}
                              />
                         </div>
                         <div className="content-image">
                              <p>Image preview</p>
                              <CustomUpload />
                         </div>
                    </div>


                    <div className="panel-block-form">
                         <div className="form-top">
                         <p>Active alerts</p> <div className="date-time">to 18.05.2025 15/35</div>
                         </div>
                        <AlertsLine type="news" content={'22nd opening of a new project'} />
                    </div>
                    <div className="panel-block-form">
                         <div className="form-top-line">
                              <div className="top-line-first"><i className="icon-payments"></i> <p>Special</p></div>
                              <CustomButton name={'Published'}/>
                         </div>
                         <div className="form-content">
                              <label>
                                   <p>Title</p>
                                   <CustomInput/>
                              </label>
                              <label>
                                   <p>Text-1</p>
                                   <CustomInput/>
                              </label>
                              <label>
                                   <p>Text-2</p>
                                   <CustomInput/>
                              </label>
                              <label>
                                   <p>Button Name</p>
                                   <CustomInput/>
                              </label>
                              <label>
                                   <p>Button Url</p>
                                   <CustomInput/>
                              </label>
                              <label>
                                   <p>Button2 Name</p>
                                   <CustomInput/>
                              </label>
                              <label>
                                   <p>Decoration Gradient</p>
                                   <CustomInput/>
                              </label>
                         </div>
                         <div className="content-image">
                              <p>Image preview</p>
                              <CustomUpload/>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default AlertsItem;
