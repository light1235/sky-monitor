"use client"
import React, {useState} from 'react';
import  './index.scss';
import { Button, message, Steps, theme } from 'antd';
import popUpForm from "@/components/main/pop-up-form";
import ListingHeader from '../../../assets/main/images/listing-header.jpg';
import Image from 'next/image'
import CustomButton from "@/components/panel/custom-button";
import CustomFrontButton from "@/components/main/cutom_front_button";

const ListingForm = () => {

     const steps = [
          {
               title: 'Listing',
               content: (
                    <div className="listing-content-1">1</div>
               )
          },
          {
               title: 'Project',
               content: (
                    <div className="listing-content-2">2</div>
               )

          },
          {
               title: 'Preview',
               content: (
                    <div className="listing-content-3">2</div>
               )

          },
          {
               title: 'Payments',
               content: (
                    <div className="listing-content-3">2</div>
               )
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
          lineHeight: '260px',
          color: token.colorTextTertiary,
          backgroundColor:'#f2f2f2',
          borderRadius: token.borderRadiusLG,
          border: `none`,
          marginTop: 16,
     };


     return (
          <div className="listing-pop-up">
               <Image width="auto" height="auto" src={ListingHeader} />
          <div className="step-table listing-table">
               <Steps current={current} items={items}/>
               <div style={contentStyle}>{steps[current].content}</div>
               <div className="button-wrap"
                    style={{
                         marginTop: 24,
                    }}
               >
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

               </div>
          </div>
          </div>
     );
};

export default ListingForm;
