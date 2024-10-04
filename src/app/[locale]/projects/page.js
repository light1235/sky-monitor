import React from 'react';
import './index.scss';
import HidenTegs from "@/components/main/hiden-tegs";
import getData from "@/services/projectApi";
import Preview_wrapper from "@/components/main/preview_wrapper";

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
                             <Preview_wrapper data={data} />
                         </div>
                    </div>
               </section>
          </>
     );
};

export default Projects;
