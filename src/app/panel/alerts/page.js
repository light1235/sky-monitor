"use client"
import React, {useEffect, useState} from 'react';
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

     const [AlertStandardData, setAlertStandardData] = useState([]);
     const [hoursValue, setHoursValue] = useState('12');
     const [specialHoursValue, setSpecialHoursValue] = useState('24');
     const [radioValue, setRadioValue] = useState('news');
     const [articleValue, setArticleValue] = useState('');
     const [descriptionValue, setDescriptionValue] = useState('');
     const [linkValue, setLinkValue] = useState('');

     const [titleValue, setTitleValue] = useState('');
     const [textValue, setTextValue] = useState('');
     const [text2Value, setText2Value] = useState('');
     const [buttonName, setButtonName] = useState('');
     const [buttonUrl, setButtonUrl] = useState('');
     const [button2Name, setButton2Name] = useState('');
     const [decGradient, setDecGradient] = useState('');

     const onChange = (e) => {
          // console.log('radio checked', e.target.value);
          setRadioValue(e.target.value);
     };
     const handleChange = (value) => {
          // console.log(`selected ${value}`);
          setHoursValue(value)
     };
     const specialHandleChange = (value) => {
          setSpecialHoursValue(value);
     };

     const addAlert = () => {
          if (articleValue && descriptionValue && linkValue){
               setAlertStandardData([...AlertStandardData,{id: Date.now(), type:radioValue, article:articleValue, description:descriptionValue, link:linkValue, hours:hoursValue, image:radioValue}]);
               setArticleValue('')
               setDescriptionValue('')
               setLinkValue('')
          }

     };
     const addSpecialAlert = () => {
          setAlertStandardData([...AlertStandardData,{id: Date.now(), type:'special', title:titleValue,text:textValue, text2:text2Value,button:buttonName,button2:button2Name,url:buttonUrl,gradient:decGradient, hours:specialHoursValue, image:''}]);
          setTitleValue('')
          setTextValue('')
          setText2Value('')
          setButtonName('')
          setButton2Name('')
          setButtonUrl('')
          setDecGradient('')
     };
     useEffect(() => {
          console.log(AlertStandardData);
     },[AlertStandardData])

     const deleteAlert = (id) => {
          setAlertStandardData((prevAlerts) => prevAlerts.filter(alert => alert.id !== id))
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
                               <Radio.Group onChange={onChange} value={radioValue}>
                                    <Radio value={'news'}><i className="icon-newspaper"></i> News</Radio>
                                    <Radio value={'project'}><i className="icon-audio-description"></i> Project</Radio>
                                    <Radio value={'alert'}><i className="icon-edit"></i> Alert</Radio>
                               </Radio.Group>
                               <div onClick={addAlert}>
                                    <CustomButton  name={'Published'} />
                               </div>

                          </div>
                         <div className="form-content">
                              <label>
                                   <p>Article</p>
                                   <CustomInput value={articleValue} change={(e) => setArticleValue(e.target.value)}  />
                              </label>
                              <label>
                                   <p>Description</p>
                                   <CustomInput value={descriptionValue} change={(e) => setDescriptionValue(e.target.value)}  />
                              </label>
                              <label>
                                   <p>Link</p>
                                   <CustomInput value={linkValue} change={(e) => setLinkValue(e.target.value)} />
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
                    </div>


                    <div className="panel-block-form">
                         <div className="form-top">
                         <p>Active alerts</p> <div className="date-time">to 18.05.2025 15/35</div>
                         </div>
                         {AlertStandardData.map((item,index) =>
                              <AlertsLine key={index} item={item} index={index} deleteItem={deleteAlert}  type={item.type}  />
                         )}

                    </div>
                    <div className="panel-block-form">
                         <div className="form-top-line">
                              <div className="top-line-first"><i className="icon-payments"></i> <p>Special</p></div>
                              <div onClick={addSpecialAlert}><CustomButton name={'Published'}/></div>

                         </div>
                         <div className="form-content">
                              <label>
                                   <p>Title</p>
                                   <CustomInput value={titleValue} change={(e) => setTitleValue(e.target.value)}/>
                              </label>
                              <label>
                                   <p>Text-1</p>
                                   <CustomInput value={textValue} change={(e) => setTextValue(e.target.value)}/>
                              </label>
                              <label>
                                   <p>Text-2</p>
                                   <CustomInput value={text2Value} change={(e) => setText2Value(e.target.value)}/>
                              </label>
                              <label>
                                   <p>Button Name</p>
                                   <CustomInput value={buttonName} change={(e) => setButtonName(e.target.value)}/>
                              </label>
                              <label>
                                   <p>Button Url</p>
                                   <CustomInput value={buttonUrl} change={(e) => setButtonUrl(e.target.value)}/>
                              </label>
                              <label>
                                   <p>Button2 Name</p>
                                   <CustomInput value={button2Name} change={(e) => setButton2Name(e.target.value)}/>
                              </label>
                              <label>
                                   <p>Decoration Gradient</p>
                                   <CustomInput value={decGradient} change={(e) => setDecGradient(e.target.value)}/>
                              </label>
                         </div>
                         <div className="content-hours">
                              <p>Working hours</p>
                              <Select
                                   defaultValue="Select days..."
                                   style={{
                                        width: 120,
                                   }}
                                   onChange={specialHandleChange}
                                   options={[
                                        {
                                             value: '24',
                                             label: '1',
                                        },
                                        {
                                             value: '48',
                                             label: '2',
                                        },
                                        {
                                             value: '72',
                                             label: '3',
                                        },
                                        {
                                             value: '96',
                                             label: '4',
                                        },
                                        {
                                             value: '120',
                                             label: '5',
                                        },
                                        {
                                             value: '144',
                                             label: '6',
                                        },
                                        {
                                             value: '168',
                                             label: '7',
                                        },
                                   ]}
                              />
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
