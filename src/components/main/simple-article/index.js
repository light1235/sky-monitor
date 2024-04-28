"use client"
import React from 'react';
import './index.scss';
import Image from "next/image";
import { Flex, Progress, Slider, Typography } from 'antd';
import Link from "next/link";


const ArticlePage = ({post}) => {



     return (
          <div className="article__page">
               <div className="article__inner">
                    <Image  width="1920" height="500" src={post.article.image} alt="article image"></Image>
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
                                   <div>Investment term:<span>from 10 days</span></div>
                                   <div>Deposit amount:<span>from 30$</span></div>
                              </div>
                              <div className="block-right">
                                   <div>Accepts:<span>Bitcoin, Litecoin, Dogecoin, Tether, Tron</span></div>
                                   <div>Payouts:<span>up to 48 hours Refback: 0%</span></div>
                                   <div>Refback:<span>0%</span></div>
                                   <div>Our deposit:<span>300$</span></div>
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
                                        percent={50}
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
               </div>
          </div>
     );
};

export default ArticlePage;
