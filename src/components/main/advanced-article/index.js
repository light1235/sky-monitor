"use client"
import React from 'react';
import './index.scss'
import Image from "next/image";
import Link from "next/link";
import Comments_post from "@/components/main/comments_post";
import Add_post_form from "@/components/main/add_post_form";
import {Button, Tabs} from 'antd';
import ReactPlayer from 'react-player/youtube';
import dynamic from "next/dynamic";
import YouT from '/src/assets/main/icons/play-you.svg'

const AdvancedArticle = ({post}) => {

     const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

     const items = [
          {
               key: '1',
               label:  <Button type={'primary'} htmlType="submit"  size={'large'} style={{
                    background: '#5B5BDF',
                    fontFamily: 'Open Sans',
                    fontWeight: '600',
                    padding: '0 40px 0 40px',
                    boxShadow: ' 6px 8px 15px 0 rgba(86, 93, 178, 0.25)',
                    strokeWidth: '2px',
                    height: '60px',
                    fontSize: '20px',
                    width: "100%",
                    className:'tab-button'
               }}>
                    EN Language
               </Button>,
               children: <ReactPlayer
                    light
                    url={post.additional.youTubeEU}
                    playIcon={<Image src={YouT} width="50px" height="50px" alt='youtube icon'/>}
                    width="900px"
                    height="500px"
                    playing
                    className="youtube-player"
               />,
          },
          {
               key: '2',
               label:  <Button type={'primary'} htmlType="submit"  size={'large'} style={{
                    background: '#5B5BDF',
                    fontFamily: 'Open Sans',
                    fontWeight: '600',
                    padding: '0 40px 0 40px',
                    boxShadow: ' 6px 8px 15px 0 rgba(86, 93, 178, 0.25)',
                    strokeWidth: '2px',
                    height: '60px',
                    fontSize: '20px',
                    width: "100%",
                    className:'tab-button'
               }}>
                    RU Language
               </Button>,
               children: <ReactPlayer
                    light
                    url={post.additional.youtubeRu}
                    playIcon={<Image src={YouT} width="50px" height="50px" alt='youtube icon'/>}
                    width="900px"
                    height="500px"
                    playing
                    className="youtube-player"
               />,
          },
     ];

     const comments = [
          {id:1,name:'Roy Jamson',date:'18.05.2024',context:'Rewline\'s team of experts is committed to helping traders make informed trading decisions by utilizing the power of artificial intelligence. Using artificial intelligence-based algorithms, the company provides traders with insights'},
          {id:2,name:'Michael Rayen',date:'22.05.2024',context:'Leveraging the power of artificial intelligence, Rewline\'s team of experts empowers traders to make informed decisions, utilizing AI-powered algorithms that provide valuable market insights.\n' +
                    '\n'},
          {id:3,name:'Wilson Mchourney',date:'23.05.2024',context:'This sentence captures the essence of Rewline\'s offering by emphasizing their AI expertise, data-driven insights, and the ability to empower traders to make informed decisions.\n'},
     ]

     return (
          <div className="advanced-article__page">
               <div className="article__inner">
                    <Image className="article-image"  width="900" height="500" src={post.article.image} alt="article image"></Image>
                    <div className="article__content">
                         <div className="content__top">
                              <div className="content__date-published">{post.article.date}</div>
                              <h1 className="content__title">{post.article.title} {post.article.projectLink &&
                                   <Link target="_blank" href={post.article.projectLink}>{post.slug}</Link>} </h1>
                              <div className="content__separator"></div>
                         </div>
                         <div className="article__main-content">
                              <div className="article__main-block">
                                   <h2>About the project</h2>
                                   <p>Investing in Lapaido ✅ (official website lapaido.com) - an excellent high-interest HYIP-project offering 5 detailed investment plans with returns from 1 to 69 days and returns from 104% to 10 000% for the entire investment period! Cashback: 1%. Insurance fund: 400$.</p>
                              </div>
                              <div className="article__main-block">
                                   <h2>How much can you make?</h2>
                                   <p>The optimal plan “170% After 1 Day (Plan 1)” has a yield of 104% after 24 hours. Deposit and profit are accrued at the end of the investment period. For example, we invest 200$ and after 24 hours we get 208$. Net profit is 8$ for the whole investment period (with our bonus - 10$).</p>
                              </div>
                              <div className="article__main-block project-plan">
                                   <h2>Investment plans of the "Lapaido" project </h2>
                                   <Image  width="1920" height="500" src="https://cdn.discordapp.com/attachments/1046398987659395152/1246066214740955186/lp-plan-101_1.jpg?ex=665b0918&is=6659b798&hm=a3c256c61870e668cab6d34915fbe82079fe3b7c6afe7a0e28f8e312f9fd39e0&" alt="plan image"></Image>
                              </div>
                              <div className="article__main-block project-description">
                                   <div>Deposit amount: <span>{post.article.amountDeposit}</span></div>
                                   <div>Minimum withdrawal amount:<span>{post.article.amountDeposit}</span></div>
                                   <div>Yield: <span>{post.article.yield}</span></div>
                                   <div>Payouts:<span>{post.article.payouts}</span> </div>
                                   <div>Affiliate Program:<span>{post.article.refBack}</span> </div>
                                   <div>Payment Systems:<span>{post.article.paymentSystem}</span>  </div>
                              </div>
                              <div className="article__main-block">
                                   <h2>Registration</h2>
                                   <div>customize content with text editor</div>
                              </div>
                              <div className="article__main-block video-block">
                                   <h2>Video review</h2>
                                   <Tabs  type="card" defaultActiveKey="1" items={items}/>
                              </div>
                              <div className="article__main-block">
                              <h2>
                                        <div className="text-separator"></div>
                                        My opinion and investment
                                   </h2>
                                   <p>{post.additional.opinion}</p>
                              </div>

                         </div>
                         <div className="comments" style={{marginTop: '40px'}}>
                              {comments.map((post) =>
                                   <Comments_post post={post} key={post.id}/>
                              )}
                              <Add_post_form/>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AdvancedArticle;
