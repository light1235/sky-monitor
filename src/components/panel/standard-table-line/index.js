"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'
import CustomCheckBox from "@/components/panel/check-box";
import CustomDropDown1 from "@/components/panel/drop-down";


const TableLine = ({background = 'white',EditeM = 'Edite listing',DeleteM ='Mark delete',published = false}) => {
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
          <div className="standard-table-line" style={{background:`${background}`}}>
               <div className="table-left">
                    <CustomCheckBox />
                    <div className="image-block"></div>
                    <p>Razzelton</p>
               </div>
               <div className="table-right">
                    <p>User</p><p>Scam</p><p>Crypto</p>{published ? <p>Published</p> : <p style={{color:'#CB4335'}}>Not published</p>}
                    <div className="table-panel">
                         {activeMenu &&
                              <div className="edit-menu">
                                   <div><i className="icon-pencil"></i> <p>{EditeM}</p></div>
                                   <div><i className="icon-cancel"></i> <p>{DeleteM}</p></div>
                              </div>
                         }
                         <p>21 SEP 10.45</p><i className="icon-gear-custom"
                                               onClick={() => setActiveMenu(!activeMenu)}></i>
                    </div>
               </div>

          </div>
     );
};

export default TableLine;
