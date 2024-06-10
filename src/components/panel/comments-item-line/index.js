"use client"
import React, {useState} from 'react';
import './index.scss'
import Image from "next/image";
import CustomModal from "@/components/main/custom_modal";
import CustomPanelAcceptor from "@/components/panel/custom-panel-acceptor";

const CommentsItemLine = ({item,back,deleteCom}) => {
     const [activeModal, setActiveModal] = useState(false);
     const showModal = () => {
          setActiveModal(!activeModal);
     };

     const handleDelete = () => {
          deleteCom(item.id);
     };
     return (
          <>
          <div className="comments-item-line" style={{backgroundColor:back}}>
               <h3>{item.name}</h3><p>{item.context}</p> <div className="icon"><i onClick={showModal} className="icon-cancel"></i></div>
          </div>
               <CustomModal centered={undefined} width={undefined}  open={activeModal} close={showModal}><CustomPanelAcceptor action={`delete comment user ${item.name}?`} accept={handleDelete} close={showModal} /> </CustomModal>
          </>
     );
};

export default CommentsItemLine;
// onClick={handleDelete}
