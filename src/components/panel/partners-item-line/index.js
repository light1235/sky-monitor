"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'

const PartnersItemLine = ({partner,deleteData}) => {
     const [showMenu, setShowMenu] = useState(false);

     useEffect(() => {
          // Функция-обработчик для закрытия меню при щелчке вне его области
          const handleClickOutsideMenu = (event) => {
               if (showMenu === true){
                    setShowMenu(false)
               }
          };

          // Добавляем обработчик при монтировании компонента
          document.addEventListener('click', handleClickOutsideMenu);

          // Убираем обработчик при размонтировании компонента
          return () => {
               document.removeEventListener('click', handleClickOutsideMenu);
          };
     }, [showMenu]);


     return (
          <div className="partners-item-line">
               <div className="line-name">{partner.name}</div>
               <div className="line-email">{partner.email}</div>
               <div className="line-panel" onClick={() => setShowMenu(!showMenu)}>
                    <i className="icon-gear-custom"></i>
                    {showMenu &&
                         <div className="edit-menu">
                              <div ><i className="icon-pencil"></i> <p>Edite Partner</p></div>
                              <div onClick={() => deleteData(partner.id)}><i className="icon-cancel"></i> <p>Delete Partner</p></div>
                         </div>
                    }
               </div>
          </div>
     );
};

export default PartnersItemLine;
