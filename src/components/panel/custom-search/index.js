"use client"
import React from 'react';
import Search from "antd/es/input/Search";
import {Input} from "antd";

const CustomSearch = () => {

     const { Search } = Input;
     const onSearch = (value, _e, info) => console.log(value);
     return (
          <div>
               <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{
                         width: 300,
                    }}
               />
          </div>
     );
};

export default CustomSearch;
