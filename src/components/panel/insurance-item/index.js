import React from 'react';
import './index.scss'

const InsuranceItem = ({item,back}) => {
     return (
          <div className="insurance-item" style={{backgroundColor:back}}>
               <div className="item-block">{item.name}</div>
               <div className="item-block">{item.email}</div>
               <div className="item-block">{item.data}</div>
               <div className="item-block item-status"><span className={item.status === 'normal' && 'normal' || item.status === 'high risk' && 'high-risk' || item.status === 'low' && 'low'}>{item.status}</span></div>
          </div>
     );
};

export default InsuranceItem;
