import React from 'react';
import './index.scss'
import  projectPreviewImage from '/src/assets/main/images/projects-preview.jpg';
import Image from "next/image";
import pinIcon from '/src/assets/main/icons/pin-icon.svg';
import calendarIcon from '/src/assets/main/icons/calendar-icon.svg';
import Link from "next/link";
import CustomToolTop from "@/components/main/tooltip_custom";

const ProjectPreview = () => {
     return (
          <div className="preview-card">
               <Link href="/" >
               <div className="preview-card-image">
                    <Image src={projectPreviewImage} alt='project image'/>
               </div>
               <div className="preview-card-wrapper">
                    <div className="preview-card-title">
                         <h2><CustomToolTop text='go to project overview'>Zetbull.com</CustomToolTop></h2>
                    </div>
                    <div className="preview-card-description">
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi cumque, cupiditate distinctio eum facere ipsam quasi reprehenderit sequi ullam. Aspernatur
                              Lorem ipsum dolor sit amet, consectetur adipisicing e Lorem ipsum dolor sit amet, consectetur adipisicing e onsectetur adipisicing e
                         </p>
                    </div>
                    <div className="preview-card-bottom-line">
                         <div className="line-item">
                              <Image src={pinIcon} alt='pin icon'/><span>Investition,</span> <span>Liders</span>
                         </div>
                         <div className="line-item">
                              <Image src={calendarIcon} alt='pin icon'/> <span>01.11.2021</span>
                         </div>
                    </div>
               </div>
               </Link>
          </div>
     );
};

export default ProjectPreview;
