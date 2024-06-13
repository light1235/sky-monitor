import React from 'react';
import './index.scss'

const SaleTableLine = ({item,back}) => {
     return (
          <div className="sale-table-line" style={{backgroundColor:back}}>
               <p className="grid-item">{item.name}</p>
               <p className="grid-item">{item.income}</p>
               <p className="grid-item">{item.type}</p>
               <p className="grid-item">{item.start}</p>
               <p className="grid-item">{item.end}</p>
          </div>
     );
};

export default SaleTableLine;
