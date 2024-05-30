"use client"
import React from 'react';
import DATAART from '../../../db/articleData.json';
import ArticlePage from "@/components/main/simple-article";
import NewsArticle from "@/components/main/news-article";

const PostComp = ({params}) => {


     const {slug} = params;

     const filteredData = DATAART.filter(post => post.slug.replace(/\s+/g, '-') === slug);

     return (
          <div>

               {DATAART.map((post) => {
                    // console.log(  post.article.articleType.news);
               })}

               {filteredData.map(post => (
                    // <ArticlePage post={post} key={post.id} />
                    <NewsArticle post={post} key={post.id} />
               ))}
          </div>
     );
};

export default PostComp;
