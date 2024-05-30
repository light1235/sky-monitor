import React from 'react';
import CustomButton from "@/components/panel/custom-button";
import CustomFrontButton from "@/components/main/cutom_front_button";
import {Button} from "antd";
import CustomTextArea from "@/components/main/cutom-text-area";
import './index.scss';

const AddPostForm = () => {
     return (
          <div className="post-form">
               <div className="post-form-content">
                    <CustomTextArea placeholder={'Add comments...'} max={230}></CustomTextArea>
                    <Button type={'primary'} htmlType="submit"  size={'large'} style={{
                         background: '#5B5BDF',
                         fontFamily: 'Open Sans',
                         fontWeight: '600',
                         padding: '6px 34px',
                         boxShadow: ' 6px 8px 15px 0 rgba(86, 93, 178, 0.25)',
                         strokeWidth: '2px',
                         height: 'auto',
                         fontSize: '20px',
                         width: "160px",
                         borderRadius:'10px',
                         marginTop:'18px',
                         display:'grid',
                         justifySelf:'center'
                    }}>
                         Comment
                    </Button>
               </div>
          </div>
     );
};

export default AddPostForm;
