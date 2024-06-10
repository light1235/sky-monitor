import React from 'react';
import './index.scss'
import AlertIcon from '../../../assets/panel/icons/alert-icon.svg';
import Image from "next/image";

const CustomPanelAcceptor = ({action = 'action',close,accept}) => {
     return (
          <div className="panel-modal">
               <div className="modal-top-line">
                    <div className="alert"><Image src={AlertIcon}  alt="alert icon" height={29}></Image> Alert!!!</div>
                    <div className="close-block"><i className="icon-cancel" onClick={close}></i></div>
               </div>
               <div className="modal-content-line">
                    <p>Are you sure want {action}</p>
               </div>
               <div className="modal-bottom-line">
                    <div className="button-container">
                         <div className="button-yes" onClick={accept}>Yes</div>
                         <div className="button-no" onClick={close}>No</div>
                    </div>
               </div>
          </div>
     );
};

export default CustomPanelAcceptor;
// <CustomModal />
