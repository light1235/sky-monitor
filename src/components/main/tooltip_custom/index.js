"use client"
import React, {useEffect, useState} from 'react';
import { Tooltip } from 'antd';

const CustomToolTop = ({children,text,open}) => {
     const [isMounted, setIsMounted] = useState(false);

     useEffect(() => {
          setIsMounted(true);
     }, []);


     return (
          <>
               <Tooltip forceRender={isMounted}  trigger={'hover'}  style={{ color: 'red' }} className={'wrap-span'} color="white" title={<span style={{ color: '#a1a1a4', fontFamily:"Roboto", fontWeight:400,padding:'0 16px', }}>{text}</span>}>
                    {children}
               </Tooltip>
          </>
     );
};

export default CustomToolTop;

