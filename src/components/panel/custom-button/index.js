import React from 'react';
import {Button} from "antd";

const CustomButton = ({name = 'Add new', type= 'primary'}) => {
     return (
          <>
               <Button type={type} htmlType="submit" size={'large'} style={{background:'#85CE36',fontFamily:'Open Sans',fontWeight:'600',padding:'0 20px 0 20px'}}>
                    {name}
               </Button>
          </>
     );
};

export default CustomButton;
