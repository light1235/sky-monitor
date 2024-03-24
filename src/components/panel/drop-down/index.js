"use client"
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import "./index.scss";


const onClick = ({ key }) => {
     message.info(`Click on item ${key}`);
};
const CustomDropDown1 = ({items}) => {
     return (
          <>
               <Dropdown
                    trigger={['click']}
                    menu={{
                         items,
                         onClick,
                    }}
                    className="drop-menu"
               >
                    <a onClick={(e) => e.preventDefault()}>
                         <Space>
                              More actions...
                              <DownOutlined />
                         </Space>
                    </a>
               </Dropdown>
          </>
     );
};

export default CustomDropDown1;
