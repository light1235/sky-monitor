"use client"
import React, {useState} from 'react';
import './index.scss'

import { Button, message, Steps, theme } from 'antd';

const steps = [
     {
          title: 'News preview',
          content: 'First-content',
     },
     {
          title: 'News info',
          content: (
               <>
                    <i className="icon-up-circle" style={{color:'black'}}></i> Mark a TOP Projects
               </>
          ),

     },
     {
          title: 'Publish',
          content: 'Last-content',
     },
];



const NewsStepper = () => {
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
          <div className="step-table">
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
export default NewsStepper;
