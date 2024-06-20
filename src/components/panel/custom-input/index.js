"use client"
import React from 'react';
import { Input } from 'antd';
import './index.scss'
const CustomInput = ({placeholder = ' ', value= ''}) => {
     return (
          <div className="adm-input">
               <Input value={value} placeholder={placeholder} />
          </div>
     );
};

export default CustomInput;
