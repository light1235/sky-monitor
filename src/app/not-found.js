import React from 'react';
import './index.scss'

const notFound = () => {
     return (
          <div className="error-page">
               <div className="error-page-container">
                    <div className="error-page-content">
                         <h1>404</h1>
                         <h2>Something  went
                              wrong =(
                         </h2>
                    </div>
               </div>
          </div>
     );
};

export default notFound;
