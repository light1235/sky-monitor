import React from 'react';
import './index.scss';
import Project_preview from "@/components/main/project_preview";
import getData from '../../services/projectApi'


const Projects = async () => {
     const data = await getData()

     return (
          <section className="projects__page">
               <div className="projects__page-container">
                    <div className="projects__page-content">
                         {data.map((post, index) =>
                              <Project_preview key={post.id} item={post}
                                               link={`/projects/${post.slug.replace(/\s+/g, '-')}`}/>
                         )}
                    </div>
               </div>
          </section>
     );
};

export default Projects;
