'use client'
import React, {useState} from 'react';
import { Button, Modal } from 'antd';

const CustomModal = ({open,close,children,width = 'initial',centered = true}) => {
     const [isModalOpen, setIsModalOpen] = useState(false);

     const showModal = () => {
          setIsModalOpen(true);
     };
     const handleOk = () => {
          setIsModalOpen(false);
     };
     const handleCancel = () => {
          setIsModalOpen(false);
     };

     const modalStyles = {
          mask: {
               backdropFilter: 'blur(6px)',background: 'rgba(46, 56, 73, 0.5)',
          },
          body: {
               boxShadow: 'none',
               padding: 0,
               background: 'transparent',

          },
          content: {
               boxShadow: 'none',
               padding: 0,
               background: 'transparent',
          },
     };
     return (
          <>
               <Modal   open={open}  onCancel={close} footer={false} styles={modalStyles}  centered width={width}  closeIcon={null} contentBg={'transparent'}>
                    {children}
               </Modal>
          </>
     );
};

export default CustomModal;
