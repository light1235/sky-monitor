"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'
import CustomCheckBox from "@/components/panel/check-box";

const AdvTableLine = ({EditeM = 'Edite listing',DeleteM ='Mark delete'}) => {
     const [activeMenu, setActiveMenu] = useState(false);


     useEffect(() => {
          // Функция-обработчик для закрытия меню при щелчке вне его области
          const handleClickOutsideMenu = (event) => {
               if (activeMenu === true){
                    setActiveMenu(false)
               }
          };

          // Добавляем обработчик при монтировании компонента
          document.addEventListener('click', handleClickOutsideMenu);

          // Убираем обработчик при размонтировании компонента
          return () => {
               document.removeEventListener('click', handleClickOutsideMenu);
          };
     }, [activeMenu]);

     return (
          <div className="adv-table">
               <div className="table-left">
                    <CustomCheckBox/>
                    <div className="image-block"></div>
                    <p>Razzelton</p>
               </div>
               <p style={{textAlign:'center'}}>Admin</p>
               <div className="table-right">
                    <div className="date-block">
                         <p>21 SEP 10.45</p>
                         <p>21 SEP 10.45</p>
                    </div>
                    <p>Header-banner</p>
                    <p>Razzelton.com</p>
                    <div className="table-panel">
                         {activeMenu &&
                              <div className="edit-menu">
                                   <div><i className="icon-pencil"></i> <p>{EditeM}</p></div>
                                   <div><i className="icon-cancel"></i> <p>{DeleteM}</p></div>
                              </div>
                         }
                         <p>21 SEP 10.45</p><i className="icon-gear-custom" onClick={() => setActiveMenu(!activeMenu)}></i>
                    </div>
               </div>

          </div>
     );
};

export default AdvTableLine;
