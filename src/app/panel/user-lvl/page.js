"use client";
import React, { useState } from 'react';
import './index.scss';
import CustomSearch from "@/components/panel/custom-search";

const UserLvl = () => {
     const [userData, setUserData] = useState([
          { name: 'Razzelton', icon1: true, icon2: false, icon3: false, icon4: false },
          { name: 'John Wick', icon1: true, icon2: false, icon3: false, icon4: false },
          { name: 'Tony Sanders', icon1: true, icon2: false, icon3: false, icon4: false },
          { name: 'Will Smith', icon1: true, icon2: false, icon3: false, icon4: false },
          { name: 'Roger Daily', icon1: true, icon2: false, icon3: false, icon4: false }
     ]);

     const [searchTerm, setSearchTerm] = useState('');

     // Поиск пользователей по имени
     const filteredUsers = userData.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
     );

     const handleSearch = (event) => {
          setSearchTerm(event.target.value);
     };

     const updateData = (name, iconKey) => {
          setUserData(userData.map((item) =>
               item.name === name
                    ? { ...item, [iconKey]: !item[iconKey] }
                    : item
          ));
     };

     return (
          <div className="user-lvl__page">
               <div className="page-top-bar">
                    <h2>User Lvl</h2>
                    <div className="bar-search">
                         <CustomSearch onSearch={handleSearch} />
                    </div>
               </div>
               <div className="page-data-table">
                    <div className="table-top"><p>User Name</p></div>
                    <div className="table-content">
                         {filteredUsers.map((item) => (
                              <div
                                   key={item.name} // Используем имя как уникальный ключ
                                   style={{ backgroundColor: userData.indexOf(item) % 2 === 0 ? "" : "#F2F2F2" }}
                                   className="user-table"
                              >
                                   <div className="table-item-name">{item.name}</div>
                                   <div
                                        className={item.icon1 ? 'table-item active' : 'table-item'}
                                        onClick={() => updateData(item.name, 'icon1')}
                                   >
                                        Watchman
                                   </div>
                                   <div
                                        className={item.icon2 ? 'table-item active' : 'table-item'}
                                        onClick={() => updateData(item.name, 'icon2')}
                                   >
                                        Elite Ninja
                                   </div>
                                   <div
                                        className={item.icon3 ? 'table-item active' : 'table-item'}
                                        onClick={() => updateData(item.name, 'icon3')}
                                   >
                                        Dark Wizard
                                   </div>
                                   <div
                                        className={item.icon4 ? 'table-item active' : 'table-item'}
                                        onClick={() => updateData(item.name, 'icon4')}
                                   >
                                        Lord
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default UserLvl;
