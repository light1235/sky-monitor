"use client"
import React from 'react';
import { Select } from 'antd';
import './index.scss';

const CustomFrontSelect = ({ onSelect,placeholder,Data }) => {

     const handleChange = (value) => {
          onSelect(value);
     };

     return (
          <div className="custom-select">
               <Select
                    onChange={handleChange}
                    placeholder={placeholder}
                    style={{ flex: 1 }}
                    options={Data}
                    defaultValue={placeholder}
               />
          </div>
     );
};

export default CustomFrontSelect;
