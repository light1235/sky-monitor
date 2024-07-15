"use client"
import React from 'react';
import './index.scss'
import Image from "next/image";
import Link from "next/link";
import {Progress} from "antd";
import Comments_post from "@/components/main/comments_post";
import Add_post_form from "@/components/main/add_post_form";

const NewsArticle = ({post}) => {

     const isLogin = false;

     const comments = [
          {id:1,name:'Roy Jamson',date:'18.05.2024',context:'Rewline\'s team of experts is committed to helping traders make informed trading decisions by utilizing the power of artificial intelligence. Using artificial intelligence-based algorithms, the company provides traders with'},
          {id:2,name:'Michael Rayen',date:'22.05.2024',context:'Leveraging the power of artificial intelligence, Rewline\'s team of experts empowers traders to make informed decisions, utilizing AI-powered algorithms that provide valuable market insights.\n' +
                    '\n'},
          {id:3,name:'Wilson Mchourney',date:'23.05.2024',context:'This sentence captures the essence of Rewline\'s offering by emphasizing their AI expertise, data-driven insights, and the ability to empower traders to make informed decisions.\n'},
     ]

     return (
          <div className="news-article__page">
               <div className="article__inner">
                    <Image width="900" height="500" src={post.article.image} alt="article image"></Image>
                    <div className="article__content">
                         <div className="content__top">
                              <div className="content__date-published">{post.article.date}</div>
                              <h1 className="content__title">{post.article.title} {post.article.projectLink &&
                                   <Link target="_blank" href={post.article.projectLink}>{post.slug}</Link>} </h1>
                              <div className="content__separator"></div>
                         </div>
                         <p className="text-description">{post.article.description1}</p>
                         <p className="text-description">{post.article.description2}</p>
                    </div>

                    <div className="comments" style={{marginTop: '40px'}}>

                         {comments.map((post) =>
                              <Comments_post post={post} key={post.id}/>
                         )}
                         {isLogin &&  <Add_post_form/>}
                    </div>
               </div>
          </div>
     );
};

export default NewsArticle;
