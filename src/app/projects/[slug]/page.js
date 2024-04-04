"use client"
import React from 'react';
import DATAART from '/src/assets/DataArticle.json';

const PostComp = ({params}) => {


     const { slug } = params;

     const filteredData = DATAART.filter(post => post.preview.title.replace(/\s+/g, '-') === slug);

     return (
          <div>
               {filteredData.map(post => (
                    <div key={post.id}>
                         <h1>{post.preview.title}</h1>
                         <p>{post.preview.description}</p>
                    </div>
               ))}
          </div>
     );
};

export default PostComp;
