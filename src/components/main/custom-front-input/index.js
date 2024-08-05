"use client"
import React, {useState} from 'react';
import {Input} from "antd";
import  './index.scss'


const CustomFrontInput = ({placeholder = ' ', readonly = false,dis = false,formData ,name,setFormData,...props}) => {
     // const [state, setState] = useState();
     // const handleInputChange = (event) => {
     //      const { name, value } = event.target;
     //      setFormData((prevFormData) => ({
     //           ...prevFormData,
     //           [name]: event.target.value,
     //      }));
     // };

     return (
          <div className="front-input">
               <Input
                    placeholder={placeholder}
                    disabled={dis}
                    readOnly={readonly}
                    style={{ height: '40px' }}
                    name={name}
                    {...props}
               />
          </div>
     );
};
export default CustomFrontInput;
