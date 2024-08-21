import React from 'react';
import './index.scss';
import Project_preview from "@/components/main/project_preview";
import getData from '../../services/projectApi'
import HidenTegs from "@/components/main/hiden-tegs";

export const metadata = {
     title: 'Sky Finance - Expert in investments',
     description: 'Explore our curated selection of tracked investment ventures for informed decision-making',
};


const Projects = async () => {
     const data = await getData()

     return (
          <>
               <section className="projects__page">
                    <HidenTegs text={'Stay informed on our monitored investment projects for potential opportunities.'} />
                    <div className="projects__page-container">
                         <div className="projects__page-content">
                              {data.map((post, index) =>
                                   <Project_preview key={post.id} item={post}
                                                    link={`/projects/${post.slug.replace(/\s+/g, '-')}`}/>
                              )}
                         </div>
                    </div>
               </section>
          </>
     );
};

export default Projects;
