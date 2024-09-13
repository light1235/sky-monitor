"use client"
import React from 'react';
import { Input } from 'antd';
import './index.scss'
const CustomInput = ({placeholder = ' ', value= '',change}) => {
     return (
          <div className="adm-input">
               <Input  value={value} onChange={change} placeholder={placeholder} />
          </div>
     );
};

export default CustomInput;
