import React from 'react';
import './index.scss'
import Information_line from "@/components/main/information_line";

const InfoBlock = ({children}) => {
     return (
          <div className="info-block">
               {children}
          </div>
     );
};

export default InfoBlock;
