import React from 'react';
import './index.scss'
import { useLocale } from 'next-intl';
const VotePopUp = ({name,close,voteData,disable}) => {
     // console.log(close);
     const locale = useLocale();
     return (
          <div className="vote-pop-up">
               <div className="item-top">
                    <div className="item-top-inner">
                         <p>{locale === 'en' ? 'You can vote only once a week':'Голосовать можно раз в неделю'}</p>
                         <div className="close-button" onClick={close}>
                              <div className="top-stick"></div>
                              <div className="bottom-stick"></div>
                         </div>
                    </div>
               </div>
               <div className="item-main-content">
                    <p>{locale === 'en'? 'Are you sure want to vote':'Хотите проголосовать'}  {voteData === '-1'
                         ? (locale === 'en' ? 'against' : 'против')
                         : (locale === 'en' ? 'for' : 'за')
                    } <strong>{name}</strong> ?</p>
               </div>
               <div className="item-buttons" >
                    <div className="button-yes" onClick={disable}>{locale === 'en'? 'yes':'да'}</div>
                    <div className="button-no" onClick={close}>{locale === 'en'? 'no':'нет'}</div>
               </div>
          </div>
     );
};

export default VotePopUp;
