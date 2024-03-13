'use client'
import React, {useState} from 'react';
import { Button, Modal } from 'antd';

const CustomModal = ({open,close}) => {
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
               <Modal title="Basic Modal" open={item}  onCancel={close} footer={false} styles={modalStyles}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
               </Modal>
          </>
     );
};

export default CustomModal;
