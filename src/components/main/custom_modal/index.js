'use client'
import React, {useState} from 'react';
import { Button, Modal } from 'antd';

const CustomModal = ({open,close,children}) => {
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
     };
     return (
          <>
               <Modal  open={open}  onCancel={close} footer={false} styles={modalStyles} centered  closeIcon={null}>
                    {children}
               </Modal>
          </>
     );
};

export default CustomModal;
