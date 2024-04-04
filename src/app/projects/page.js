"use client"
import React from 'react';
import './index.scss';
import Project_preview from "@/components/main/project_preview";
import DATAART from '/src/assets/DataArticle.json';

//simple-article
//additional-article

const Projects = () => {

     let text = "open its me";
     let TextFormatted = text.replace(/\s+/g, '-');

     return (
          <section className="projects__page">
               <div className="projects__page-container">
                    <div className="projects__page-content">
                         {DATAART.map((post, index) =>
                              <Project_preview key={post.id} item={post} link={`/projects/${post.preview.title.replace(/\s+/g, '-')}`} />
                         )}
                    </div>
               </div>
          </section>
     );
};

export default Projects;
