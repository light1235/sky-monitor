import React from 'react';
import { Tooltip } from 'antd';

const CustomToolTop = ({children,text}) => {
     return (
          <>
               <Tooltip style={{ color: 'red' }} color="white" title={<span style={{ color: '#a1a1a4', fontFamily:"Roboto", fontWeight:400,padding:'0 16px', }}>{text}</span>}>
                    {children}
               </Tooltip>
          </>
     );
};

export default CustomToolTop;
