"use client"
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import "./index.scss";


const onClick = ({ key }) => {
     message.info(`Click on item ${key}`);
};
const items = [
     {
          label: (
               <>
                    <i className="icon-up-circle"></i> Mark a top
               </>
          ),
          key: '1',
     },
     {
          label: (
               <>
                    <i className="icon-mark-prem"></i> Mark premium
               </>
          ),
          key: '2',
     },
     {
          label: (
               <>
                    <i className="icon-ok-circled"></i> Mark normal
               </>
          ),
          key: '3',
     },
     {
          label: (
               <>
                    <i className="icon-ok"></i> Mark scam
               </>
          ),
          key: '4',
     },
     {
          label: (
               <>
                    <i className="icon-edit"></i> Mark normal
               </>
          ),
          key: '5',
     },
     {
          label: (
               <>
                    <i className="icon-cancel"></i> Mark delete
               </>
          ),
          key: '6',
     },
     {
          label: (
               <>
                    <i className="icon-play"></i> Published
               </>
          ),
          key: '7',
     },
];

const CustomDropDown1 = () => {
     return (
          <>
               <Dropdown
                    trigger={['click']}
                    menu={{
                         items,
                         onClick,
                    }}
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
