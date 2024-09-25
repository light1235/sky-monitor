import React from 'react';
import CustomCheckBox from "@/components/panel/check-box";
import "./index.scss"

const OptionVoteTopLine = ({category = 'Category'}) => {
     return (
          <div className="vote-top-line">
               <div className="table-left">
                    <p></p><p className="image-table">Image</p><p>Project Name</p>
               </div>
               <div className="table-right">
                    <p>User Name</p><p style={{color:'#85CE36'}}>For</p><p style={{color:'#f68f8f'}}>Against</p><p>Type</p><p>Category</p><p>Confirmation</p>
               </div>
          </div>
     );
};

export default OptionVoteTopLine;
