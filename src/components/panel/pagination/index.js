"use client"
import React from 'react';
import { Pagination } from 'antd';
import "./index.scss"

const itemRender = (_, type, originalElement) => {
     if (type === 'prev') {
          return <a>Previous</a>;
     }
     if (type === 'next') {
          return <a>Next</a>;
     }
     return originalElement;
};
const CustomPagination = () => {
     return (
          <>
               <Pagination total={40} itemRender={itemRender} showLessItems={false} />
          </>
     );
};

export default CustomPagination;
