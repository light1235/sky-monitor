import React, { useEffect, useMemo, useRef, useState } from 'react';
import './index.scss';
import { Button, message, Steps, theme } from "antd";
import CustomInput from "@/components/panel/custom-input";
import CustomTextArea from "@/components/main/cutom-text-area";
import NewsLineLogo from "@/assets/main/icons/news-line-logo.svg";
import Image from "next/image";
import CustomUpload from "@/components/panel/custom-upload";
import dynamic from 'next/dynamic';  // Add this line
import CustomCheckBox from "@/components/panel/check-box";
import { DatePicker, Space } from 'antd';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });  // Modify this line

const AddNewsForm = ({ placeholder }) => {
     const onChangeCalendar = (date, dateString) => {
          console.log(date, dateString);
     };

     const editor = useRef(null);
     const [editorContent, setEditorContent] = useState('');
     const [content, setContent] = useState('');

     const config = useMemo(
          () => ({
               readonly: false,
               placeholder: placeholder || 'Start typing...'
          }),
          [placeholder]
     );
     useEffect(() => {
          console.log(editorContent);
     }, [editorContent]);

     const [formData, setFormData] = useState({
          username: '',
     });

     const handleInputChange = (event) => {
          const { name, value } = event.target;
          setFormData((prevFormData) => ({
               ...prevFormData,
               [name]: value,
          }));
     };

     const steps = [
          {
               title: 'News preview',
               content: (
                    <div className="news-content-1">
                         <div>
                              <label>
                                   <p>Name</p>
                                   <CustomInput />
                              </label>
                              <label>
                                   <p>Description</p>
                                   <CustomTextArea placeholder={'Add comments...'} minR="7" max={300} />
                              </label>
                              <label>
                                   <p>Tags</p>
                                   <CustomInput />
                              </label>
                              <label>
                                   <p>Main page news block(news summary) <Image style={{ display: 'inline', padding: '0 5px' }} src={NewsLineLogo} alt="fire icon" height={29}></Image></p>
                                   <CustomInput />
                              </label>
                         </div>
                         <div style={{ margin: '0 auto' }}>
                              <p>Images desktop</p>
                              <div style={{ display: 'grid', justifyItems: 'center' }}>  <CustomUpload /></div>
                         </div>
                         <div>
                              <label>
                                   <p>Title</p>
                                   <CustomInput />
                              </label>
                              <label>
                                   <p>Description</p>
                                   <CustomInput />
                              </label>
                              <label>
                                   <p>Image-Alt</p>
                                   <CustomInput />
                              </label>
                         </div>
                    </div>
               )
          },
          {
               title: 'News info',
               content: (
                    <div className="news-content-2">
                         <div>
                              <label>
                                   <p>Title</p>
                                   <CustomInput />
                              </label>
                              <label>
                                   <p>Description</p>
                                   <CustomInput />
                              </label>
                              <label>
                                   <p>OG-Title</p>
                                   <CustomInput />
                              </label>
                              <label>
                                   <p>OG-Description</p>
                                   <CustomInput />
                              </label>
                              <label>
                                   <p>OG-URL</p>
                                   <CustomInput />
                              </label>
                              <label>
                                   <p>OG-Image</p>
                                   <CustomInput />
                              </label>
                              <label>
                                   <p>Canonical</p>
                                   <CustomInput />
                              </label>
                              <label>
                                   <p>Image ALT</p>
                                   <CustomInput placeholder={"Black__car"} />
                              </label>
                         </div>
                         <div>
                              <label>
                                   <p>Image ALT</p>
                                   <CustomInput placeholder={"Black__car"} />
                              </label>
                              <p>Image Desktop</p>
                              <CustomUpload />
                              <div className="editor-wrap">
                                   <JoditEditor
                                        ref={editor}
                                        value={editorContent}
                                        config={config}
                                        tabIndex={1} // tabIndex of textarea
                                        onBlur={(newContent) => setEditorContent(newContent)}
                                        onChange={(newContent) => {
                                        }}
                                   />
                                   <Button
                                        type="primary"
                                        onClick={() => {
                                             setContent(editorContent);
                                             // setEditorContent('');
                                        }}
                                        style={{ marginTop: '10px' }}
                                   >
                                        Submit Content
                                   </Button>
                              </div>
                               <div dangerouslySetInnerHTML={{ __html: editorContent }} />
                         </div>
                    </div>
               ),
          },
          {
               title: 'Publish',
               content: (
                    <div className="news-content-3">
                         <div className="item">
                              <label>
                                   <CustomCheckBox />
                                   <div className="item-button">Now</div>
                              </label>
                         </div>
                         <div className="item">
                              <label>
                                   <CustomCheckBox />
                                   <div className="item-button button-calendar">Date <i className="icon-calendar"></i></div>
                              </label>
                         </div>
                         <div className="item">
                              <label>
                                   <CustomCheckBox />
                                   <div className="item-button">Save only</div>
                              </label>
                         </div>
                    </div>
               ),
          },
     ];

     const { token } = theme.useToken();
     const [current, setCurrent] = useState(0);
     const next = () => {
          setCurrent(current + 1);
     };
     const prev = () => {
          setCurrent(current - 1);
     };
     const items = steps.map((item) => ({
          key: item.title,
          title: item.title,
     }));
     const contentStyle = {
          lineHeight: '20px',
          padding: '20px 0',
          color: token.colorTextTertiary,
          backgroundColor: '#f2f2f2',
          borderRadius: token.borderRadiusLG,
          border: `none`,
          marginTop: 16,
     };

     return (
          <div className="step-table news-table">
               <Steps current={current} items={items} />
               <div style={contentStyle}>{steps[current].content}</div>
               <div
                    style={{
                         marginTop: 24,
                    }}
               >
                    {current < steps.length - 1 && (
                         <Button type="primary" onClick={() => next()}>
                              Next
                         </Button>
                    )}
                    {current === steps.length - 1 && (
                         <Button type="primary" onClick={() => message.success('Processing complete!')}>
                              Submit
                         </Button>
                    )}
                    {current > 0 && (
                         <Button
                              style={{
                                   margin: '0 8px',
                              }}
                              onClick={() => prev()}
                         >
                              Previous
                         </Button>
                    )}
               </div>
          </div>
     );
};

export default AddNewsForm;
