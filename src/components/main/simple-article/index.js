"use client"
import React from 'react';
import './index.scss';
import Image from "next/image";
import { Flex, Progress, Slider, Typography } from 'antd';
import Link from "next/link";
import Comments_post from "@/components/main/comments_post";
import Add_post_form from "@/components/main/add_post_form";



const ArticlePage = ({post}) => {
     const comments = [
          {id:1,name:'Roy Jamson',date:'18.05.2024',context:'Rewline\'s team of experts is committed to helping traders make informed trading decisions by utilizing the power of artificial intelligence. Using artificial intelligence-based algorithms, the company provides traders with insights'},
          {id:2,name:'Michael Rayen',date:'22.05.2024',context:'Leveraging the power of artificial intelligence, Rewline\'s team of experts empowers traders to make informed decisions, utilizing AI-powered algorithms that provide valuable market insights.\n' +
                    '\n'},
          {id:3,name:'Wilson Mchourney',date:'23.05.2024',context:'This sentence captures the essence of Rewline\'s offering by emphasizing their AI expertise, data-driven insights, and the ability to empower traders to make informed decisions.\n'},
     ]

     return (
          <div className="article__page">
               <div className="article__inner">
                    <Image  width="900" height="500" priority={false} src={post.article.image} alt="article image"></Image>
                    <div className="article__content">
                         <div className="content__top">
                              <div className="content__date-published">{post.article.date}</div>
                              <h1 className="content__title">{post.article.title} {post.article.projectLink && <Link target="_blank" href={post.article.projectLink}>{post.slug}</Link>} </h1>
                              <div className="content__separator"></div>
                         </div>
                         <div className="content__main-block">
                              <div className="block-left">
                                   <div>Project start:<span>{post.article.start}</span></div>
                                   <div>Yield:<span>{post.article.yield}</span></div>
                                   <div>Investment term:<span>{post.article.investTerm}</span></div>
                                   <div>Deposit amount:<span>{post.article.amountDeposit}</span></div>
                              </div>
                              <div className="block-right">
                                   <div>Accepts:<span>{post.article.paymentSystem}</span></div>
                                   <div>Payouts:<span>{post.article.payouts}</span></div>
                                   <div>Refback:<span>{post.article.refback}</span></div>
                                   <div>Our deposit:<span>{post.article.outDeposit}</span></div>
                              </div>
                         </div>
                         <div className="content__text">
                              <div className="text-title">
                                   <div className="text-separator"></div>
                                   Investment Plans:
                              </div>
                              <p className="text-description">{post.article.description1}</p>
                              <div className="text-title">
                                   Conclusion:
                              </div>
                              <p className="text-description">
                                   {post.article.description2}
                              </p>
                              <p style={{color: 'black', fontWeight: '700'}}>Where the invested:</p>
                              <div className="invested-stats-item">
                                   <Progress
                                        type="dashboard"
                                        steps={8}
                                        percent={30}
                                        strokeColor="#8bc643"
                                        trailColor="rgba(0, 0, 0, 0.06)"
                                        strokeWidth={20}
                                        size={80}
                                   />
                                   <p>Capital for cryptocurrency resale</p>
                              </div>
                         </div>
                    </div>

                    <div className="invested-stats">

                    </div>
                    <div className="comments" style={{marginTop:'40px'}}>
                         {comments.map((post) =>
                              <Comments_post post={post} key={post.id} />
                         )}
                         <Add_post_form />
                    </div>
               </div>
          </div>
     );
};

export default ArticlePage;
