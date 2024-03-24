import React from 'react';
import {Button} from "antd";

const CustomButton = ({name = 'Add new'}) => {
     return (
          <>
               <Button type="primary" size={'large'} style={{background:'#85CE36',fontFamily:'Open Sans',fontWeight:'600',padding:'0 20px 0 20px'}}>
                    {name}
               </Button>
          </>
     );
};

export default CustomButton;
