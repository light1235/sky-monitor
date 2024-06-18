import React from 'react';
import './index.scss'

const AlertsLine = ({content,type}) => {
     return (
          <div className="alerts-line">
               <div className="line-image">
                    {type === 'ads' && <i className="icon-audio-description"></i>}
                    {type === 'news' && <i className="icon-newspaper"></i>}
                    {type === 'scam' && <i className="icon-edit"></i>}
               </div>
               <div className="line-content">{content}</div>
               <div className="line-close">
                    <i className="icon-window-close-o"></i>
               </div>
          </div>
     );
};

export default AlertsLine;
