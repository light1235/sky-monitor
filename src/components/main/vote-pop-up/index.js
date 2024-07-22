import React from 'react';
import './index.scss'

const VotePopUp = ({name,close,voteData,disable}) => {
     // console.log(close);

     return (
          <div className="vote-pop-up">
               <div className="item-top">
                    <div className="item-top-inner">
                         <p>You can vote only once a week</p>
                         <div className="close-button" onClick={close}>
                              <div className="top-stick"></div>
                              <div className="bottom-stick"></div>
                         </div>
                    </div>
               </div>
               <div className="item-main-content">
                    <p>Are you sure want to vote {voteData === '-1' ? 'against' : 'for'} <strong>{name}</strong> ?</p>
               </div>
               <div className="item-buttons" >
                    <div className="button-yes" onClick={disable}>yes</div>
                    <div className="button-no" onClick={close}>no</div>
               </div>
          </div>
     );
};

export default VotePopUp;
