"use client"
import React from 'react';
import { useLocale } from 'next-intl';
import Project_preview from "@/components/main/project_preview";


const Preview_wrapper = ({data}) => {
     const locale = useLocale();

     return (
          <>
               {data.map((post, index) =>
                    <Project_preview key={post.id} item={post}
                                     link={`/${locale}/projects/${post.slug.replace(/\s+/g, '-')}`}/>
               )}
          </>
     );
};

export default Preview_wrapper;
