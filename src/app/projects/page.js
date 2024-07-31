"use client"
import React from 'react';
import './index.scss';
import Project_preview from "@/components/main/project_preview";
import DATAART from '../../db/articleData.json';
import {useGetProjectQuery} from "@/services/projectApi";

const Projects = () => {

     const { data : projects = [], error: commentsError, isLoading: commentsLoading } = useGetProjectQuery(undefined, {
          pollingInterval: 60000,
          refetchOnMountOrArgChange: true,
          refetchOnReconnect: true,
     });

     const projectItem = [...projects].reverse();

     let text = "open its me";
     let TextFormatted = text.replace(/\s+/g, '-');

     const reversedData = [...DATAART].reverse();


     return (
          <section className="projects__page">
               <div className="projects__page-container">
                    <div className="projects__page-content">
                         {projectItem.map((post, index) =>
                              <Project_preview key={post.id} item={post} link={`/projects/${post.slug.replace(/\s+/g, '-')}`} />
                         )}
                    </div>
               </div>
          </section>
     );
};

export default Projects;
