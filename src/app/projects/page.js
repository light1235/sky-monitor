import React from 'react';
import './index.scss';
import Project_preview from "@/components/main/project_preview";


let ArticleData = [
     {
          id:'',
          slug:'',
          preview: {
               additional:false,
               image:'',
               title:'',
               description:'',
               date:'',
               tags:''
          },
          article: {
               image:'',
               date:'',
               title:'',
               start:'',
               paymentSystem:'',
               yield:'',
               payouts:'',
               refBack:'',
               investTerm:'',
               amountDeposit:'',
               outDeposit:'',
               description1:'',
               description2:'',
          },
          additional:{
               about:'',
               amountInvest:'',
               plans:'',
               registerPlan:'',
               youtubeRu:'',
               youTubeEU:'',
               opinion:'',
          }
     }
]
//preview
//simple-article
//additional-article



const Projects = () => {
     let textMain = "open its me";
     let formattedText = textMain.replace(/\s+/g, '-');
     console.log(formattedText);

     return (
          <section className="projects__page">
               <div className="projects__page-container">
                    <div className="projects__page-content">
                         <Project_preview />
                         <Project_preview />
                         <Project_preview />
                    </div>
               </div>
          </section>
     );
};

export default Projects;
