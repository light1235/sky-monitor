"use client"
import React from 'react';
import {useGetProjectQuery} from "@/services/projectApi";
import Project_preview from "@/components/main/project_preview";

const ProjectWrap = () => {
     const { data : projects = [], error: commentsError, isLoading: commentsLoading } = useGetProjectQuery(undefined, {
          pollingInterval: 60000,
          refetchOnMountOrArgChange: true,
          refetchOnReconnect: true,
     });

     const projectItem = [...projects].reverse();

     return (
          <>
               {projectItem.map((post, index) =>
                    <Project_preview key={post.id} item={post} link={`/projects/${post.slug.replace(/\s+/g, '-')}`} />
               )}
          </>
     );
};

export default ProjectWrap;
