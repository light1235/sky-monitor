"use client"
import React  from 'react';
import {Input} from "antd";
const { TextArea } = Input;
import './index.scss';

const CustomTextArea = ({placeholder = ' ', dis = false,formData ,name ,max = 60,setFormData,...props}) => {

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
                         minRows: 3,
                         maxRows: 5,
                    }}
                    {...props}
               />
          </div>
     );
};

export default CustomTextArea;
