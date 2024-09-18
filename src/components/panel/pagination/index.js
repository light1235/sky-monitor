"use client";
import React from 'react';
import { Pagination } from 'antd';
import "./index.scss";

const itemRender = (_, type, originalElement) => {
     if (type === 'prev') {
          return <a>Prev</a>;
     }
     if (type === 'next') {
          return <a>Next</a>;
     }
     return originalElement;
};

const CustomPagination = ({ current, total, pageSize, onChange }) => {
     return (
          <>
               <Pagination
                    size="large"
                    current={current}
                    total={total}
                    pageSize={pageSize}
                    itemRender={itemRender}
                    onChange={onChange}
                    className="custom-pagination"
               />
          </>
     );
};

export default CustomPagination;
