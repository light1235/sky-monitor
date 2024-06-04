import React from 'react';
import './index.scss'
import Image from "next/image";

const CommentsItemLine = ({item,back,deleteCom}) => {

     const handleDelete = () => {
          deleteCom(item.id);
     };
     return (
          <div className="comments-item-line" style={{backgroundColor:back}}>
               <h3>{item.name}</h3><p>{item.context}</p> <div className="icon"><i onClick={handleDelete} className="icon-cancel"></i></div>
          </div>
     );
};

export default CommentsItemLine;
