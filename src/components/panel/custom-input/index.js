"use client"
import React from 'react';
import { Input } from 'antd';
import './index.scss'
const CustomInput = ({placeholder = ' '}) => {
     return (
          <div className="adm-input">
               <Input placeholder={placeholder} />
          </div>
     );
};

export default CustomInput;
