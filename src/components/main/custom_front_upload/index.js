"use client"
import React, {useState} from 'react';
import {Modal, Upload} from 'antd';
import './index.scss';

const getBase64 = (file) =>
     new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
     });


const CustomFrontUpload = () => {
     const [previewOpen, setPreviewOpen] = useState(false);
     const [previewImage, setPreviewImage] = useState('');
     const [previewTitle, setPreviewTitle] = useState('');
     const [fileList, setFileList] = useState([
          {
               uid: '-1',
               name: 'image.png',
               status: 'done',
               url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
     ]);
     const handleCancel = () => setPreviewOpen(false);
     const handlePreview = async (file) => {
          if (!file.url && !file.preview) {
               file.preview = await getBase64(file.originFileObj);
          }
          setPreviewImage(file.url || file.preview);
          setPreviewOpen(true);
          setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
     };
     const uploadButton = (
          <button
               className="load-button"
               style={{
                    border: 0,
                    background: 'none',
               }}
               type="button"
          >
               {/*<PlusOutlined />*/}
               <p style={{fontSize:'30px',cursor:'pointer'}}>+</p>
               <div
                    style={{
                         marginTop: 8,
                    }}
               >
               </div>
          </button>
     );
     return (
          <div className="custom-load">
               <Upload
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    // listType="picture-circle"
                    listType="picture-card"
                    onPreview={handlePreview}
                    maxCount={1}
                    // onChange={handleChange}
               >
                    {fileList.length >= 8 ? null : uploadButton}
               </Upload>
               <p>jpg,png,gif</p>
               <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img
                         alt="example"
                         style={{
                              width: '100%',
                         }}
                         src={previewImage}
                    />
               </Modal>
          </div>
     );
};

export default CustomFrontUpload;
