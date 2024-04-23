import React from 'react';
import {Button} from "antd";

const CustomFrontButton = ({type = 'primary', name = 'Move to payment',disabled} ) => {
     return (
          <div>
               <Button type={type} htmlType="submit" disabled={disabled} size={'large'} style={{
                    background: '#5B5BDF',
                    fontFamily: 'Open Sans',
                    fontWeight: '600',
                    padding: '0 80px 0 80px',
                    boxShadow: ' 6px 8px 15px 0 rgba(86, 93, 178, 0.25)',
                    strokeWidth: '2px',
                    height: '60px',
                    fontSize: '20px',
                    width: "100%"
               }}>
                    {name}
               </Button>
          </div>
     );
};

export default CustomFrontButton;
