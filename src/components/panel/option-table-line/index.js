import React from 'react';
import CustomCheckBox from "@/components/panel/check-box";
import './index.scss'

const OptionTableLine = ({category = 'Category'}) => {
     return (
          <div className="option-table">
               <div className="table-left">
                    <CustomCheckBox /><p className="image-table">Image</p><p>Name</p>
               </div>
               <div className="table-right">
                    <p>Type</p><p>{category}</p><p>Field of activity</p><p>Status</p><p>Date</p>
               </div>
          </div>
     );
};

export default OptionTableLine;
