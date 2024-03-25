import React from 'react';
import './index.scss'
import CustomInput from "@/components/panel/custom-input";
import CustomUpload from "@/components/panel/custom-upload";
import CustomButton from "@/components/panel/custom-button";
import PartnersItemLine from "@/components/panel/partners-item-line";

const PartnersAdm = () => {
     return (
          <div className="partners-adm">
               <div className="page-top-bar">
                    <h2>Partners</h2>
               </div>
               <div className="partners-adm-inner">
                    <div className="adding-form-item">
                         <p>Add new partner</p>
                         <form>
                              <label>
                                   <p>Site name</p>
                                   <CustomInput/>
                              </label>
                              <label>
                                   <p>Site description</p>
                                   <CustomInput/>
                              </label>
                              <label>
                                   <p>Site Url</p>
                                   <CustomInput/>
                              </label>
                              <label>
                                   <p>Contact Email</p>
                                   <CustomInput/>
                              </label>
                              <p>Image preview</p>
                              <div className="bottom-form">
                                   <div className="bottom-left">
                                        <CustomUpload />
                                   </div>
                                   <div className="bottom-right">
                                        <CustomButton name="Published" />
                                   </div>
                              </div>
                         </form>

                    </div>
                    <div className="stats-form-item">
                         <p className="form-item-title">Сurrent partners</p>
                         <div className="item-separator"></div>
                         <div className="item-table">
                              <PartnersItemLine />
                              <PartnersItemLine />
                              <PartnersItemLine />
                              <PartnersItemLine />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PartnersAdm;
