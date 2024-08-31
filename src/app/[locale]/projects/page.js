"use client"
import React from 'react';
import './index.scss';
import Project_preview from "@/components/main/project_preview";
// import getData from '../../../services/projectApi'
import HidenTegs from "@/components/main/hiden-tegs";
import dataArticle from '../../../db/articleData.json'
import { useLocale } from 'next-intl';
// export const metadata = {
//      title: 'Sky Finance - Expert in investments',
//      description: 'Explore our curated selection of tracked investment ventures for informed decision-making',
// };

const Projects = async () => {
     // const data = await getData()
     const locale = useLocale();

     return (
          <>
               <section className="projects__page">
                    <HidenTegs text={'Stay informed on our monitored investment projects for potential opportunities.'} />
                    <div className="projects__page-container">
                         <div className="projects__page-content">
                              {dataArticle.map((post, index) =>
                                   <Project_preview key={post.id} item={post}
                                                    link={`/${locale}/projects/${post.slug.replace(/\s+/g, '-')}`}/>
                              )}
                         </div>
                    </div>
               </section>
          </>
     );
};

export default Projects;
