import React from 'react';
import './index.scss';
import UserImage from '../../../assets/dashboard/user-logo.jpg';
import Image from "next/image";

const CommentsPost = ({post}) => {
     return (
          <div className="comment-post">
             <div className="post-describe">
                  <Image src={UserImage} alt="user logo" />
                  <div className="user-data">
                       <div className="post-name">{post.name}</div>
                       <div className="post-date">{post.date}</div>
                  </div>

             </div>
               <div className="post-content">{post.context}</div>
          </div>
     );
};

export default CommentsPost;
