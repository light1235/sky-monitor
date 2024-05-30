"use client"
import React from 'react';
import DATAART from '../../../db/articleData.json';
import ArticlePage from "@/components/main/simple-article";

const PostComp = ({params}) => {


     const {slug} = params;

     const filteredData = DATAART.filter(post => post.slug.replace(/\s+/g, '-') === slug);

     return (
          <div>

               {DATAART.map((post) => {
                    // console.log(  post.article.articleType.news);
               })}

               {filteredData.map(post => (
                    <ArticlePage post={post} key={post.id} />
                    // <div key={post.id}>
                    //      <h1>{post.preview.title}</h1>
                    //      <p>{post.preview.description}</p>
                    // </div>
               ))}

          </div>
     );
};

export default PostComp;
