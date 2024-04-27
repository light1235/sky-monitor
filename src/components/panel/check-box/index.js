"use client"
import React from 'react';
import { Checkbox } from 'antd';
import './index.scss';

const     CustomCheckBox = ({label,onSelect = checked => {}  }) => {

     const onChange = (e) => {
          console.log(`checked = ${e.target.checked}`);
          onSelect(e.target.checked);
     };

     return (
          <>
               <Checkbox onChange={onChange} className="custom-checkbox">{label}</Checkbox>
          </>
     );
};

export default CustomCheckBox;
