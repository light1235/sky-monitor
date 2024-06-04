"use client"
import React from 'react';
import Search from "antd/es/input/Search";
import {Input} from "antd";

const CustomSearch = ({onSearch}) => {

     const { Search } = Input;
     // const onSearch = (value, _e, info) => console.log(value);
     return (
          <div>
               <Search
                    placeholder="input search text"
                    onChange={onSearch}
                    style={{
                         width: 300,
                    }}
               />
          </div>
     );
};

export default CustomSearch;
