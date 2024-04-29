"use client"
import React from 'react';
import './index.scss';
import Project_preview from "@/components/main/project_preview";
import DATAART from '../../db/articleData.json';

//simple-article
//additional-article

const Projects = () => {

     let text = "open its me";
     let TextFormatted = text.replace(/\s+/g, '-');

     const reversedData = [...DATAART].reverse();

     return (
          <section className="projects__page">
               <div className="projects__page-container">
                    <div className="projects__page-content">
                         {reversedData.map((post, index) =>
                              <Project_preview key={post.id} item={post} link={`/projects/${post.slug.replace(/\s+/g, '-')}`} />
                         )}
                    </div>
               </div>
          </section>
     );
};

export default Projects;
