"use client"
import React from 'react';
import { Input } from 'antd';
import './index.scss'
const CustomInput = ({placeholder = ' ', value= '',change}) => {
     return (
          <div className="adm-input">
               <Input  onChange={change} placeholder={placeholder} />
          </div>
     );
};

export default CustomInput;
