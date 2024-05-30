import React from 'react';
import './index.scss';

const CommentsPost = ({post}) => {
     return (
          <div className="comment-post">
             <div className="post-describe">
                  <div className="post-name">{post.name}</div>
                  <div className="post-date">{post.date}</div>
             </div>
               <div className="post-content">{post.context}</div>
          </div>
     );
};

export default CommentsPost;
