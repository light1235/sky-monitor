"use client"
import React, {useState} from 'react';
import './index.scss'

const PartnersItemLine = () => {
     const [showMenu, setShowMenu] = useState(false);


     return (
          <div className="partners-item-line">
               <div className="line-name">Razzelton</div>
               <div className="line-email">Razzelton@gmai.com</div>
               <div className="line-panel" onClick={() => setShowMenu(!showMenu)}>
                    <i className="icon-gear-custom"></i>
                    {showMenu &&
                         <div className="edit-menu">
                              <div><i className="icon-pencil"></i> <p>Edite Partner</p></div>
                              <div><i className="icon-cancel"></i> <p>Delete Partner</p></div>
                         </div>
                    }
               </div>
          </div>
     );
};

export default PartnersItemLine;
