"use client"
import React  from 'react';
import {Input} from "antd";
const { TextArea } = Input;
import './index.scss';

const CustomTextArea = ({minR='3',maxR='5',placeholder = ' ', dis = false,formData ,name ,max = 600,setFormData,...props}) => {

     const handleInputChange = (event) => {
          const { name, value } = event.target;
          setFormData((prevFormData) => ({
               ...prevFormData,
               [name]: event.target.value,
          }));
     };

     return (
          <div className="front-text-area">
               <TextArea
                    placeholder={placeholder}
                    maxLength={max}
                    // onChange={handleInputChange}
                    name={name}
                    autoSize={{
                         minRows: `${minR}`,
                         maxRows:  `${maxR}`,
                    }}
                    {...props}
               />
          </div>
     );
};

export default CustomTextArea;
