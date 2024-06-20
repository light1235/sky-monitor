"use client"
import React from 'react';
import { Checkbox } from 'antd';
import './index.scss';

const     CustomCheckBox = ({label,onSelect = checked => {}  }) => {

     const onChange1 = (e) => {
          console.log(`checked = ${e.target.checked}`);
          onSelect(e.target.checked);
     };

     return (
          <>
               <Checkbox onChange={onChange1} className="custom-checkbox">{label}</Checkbox>
          </>
     );
};

export default CustomCheckBox;
