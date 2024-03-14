import React from 'react';
import './index.scss';
import Project_preview from "@/components/main/project_preview";

const Projects = () => {
     return (
          <div className="projects__page">
               <div className="projects__page-container">
                    <div className="projects__page-content">
                         <Project_preview />

                    </div>
               </div>
          </div>
     );
};

export default Projects;
