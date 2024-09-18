"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'
import CustomInput from "@/components/panel/custom-input";
import CustomUpload from "@/components/panel/custom-upload";
import CustomButton from "@/components/panel/custom-button";
import PartnersItemLine from "@/components/panel/partners-item-line";

const PartnersAdm = () => {
     const [partnersData, setPartnersData] = useState([]);
     const [siteName, setSiteName] = useState('');
     const [siteUrl, setSiteUrl] = useState('');
     const [siteDescription, setSiteDescription] = useState('');
     const [contactEmail, setContactEmail] = useState('');
     const [siteImage, setSiteImage] = useState('');

     const enterData = () => {

          if ( siteName && siteDescription && siteUrl && contactEmail ){
               setPartnersData([...partnersData, { id: Date.now(), name: siteName, url: siteUrl, description: siteDescription, email: contactEmail }])
               setContactEmail('')
               setSiteDescription('')
               setSiteUrl('')
               setSiteName('')
          }
     };

     const deleteData = (id) => {
          setPartnersData(partnersData.filter(item => item.id !== id));
     };
     useEffect(() =>{
          console.log(partnersData);
     },[partnersData])

     return (
          <div className="partners-adm">
               <div className="page-top-bar">
                    <h2>Partners</h2>
               </div>
               <div className="partners-adm-inner">
                    <div className="adding-form-item">
                         <p>Add new partner</p>
                         <label>
                              <p>Site name</p>
                              <CustomInput
                                   value={siteName}
                                   change={(e) => setSiteName(e.target.value)}
                              />
                         </label>
                         <label>
                              <p>Site description</p>
                              <CustomInput
                                   value={siteDescription}
                                   change={(e) => setSiteDescription(e.target.value)}
                              />
                         </label>
                         <label>
                              <p>Site Url</p>
                              <CustomInput
                                   value={siteUrl}
                                   change={(e) => setSiteUrl(e.target.value)}
                              />
                         </label>
                         <label>
                              <p>Contact Email</p>
                              <CustomInput
                                   value={contactEmail}
                                   change={(e) => setContactEmail(e.target.value)}
                              />
                         </label>
                         <p>Image preview</p>
                         <div className="bottom-form">
                              <div className="bottom-left">
                                   <CustomUpload />
                              </div>
                              <div className="bottom-right" onClick={enterData}>
                                   <CustomButton name="Published"  />
                              </div>
                         </div>
                    </div>
                    <div className="stats-form-item">
                         <p className="form-item-title">Current partners</p>
                         <div className="item-separator"></div>
                         <div className="item-table">
                              {partnersData.map(partner => (
                                   <PartnersItemLine delete={() => deleteData(partner.id)} key={partner.id} partner={partner} deleteData={() => deleteData(partner.id)} />
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PartnersAdm;
