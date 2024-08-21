"use client"
import React, {useEffect, useState} from 'react';
import './index.scss'
import Image from "next/image";
import pinIcon from '/src/assets/main/icons/pinIconNew.svg';
import calendarIcon from '/src/assets/main/icons/calendarIconNew.svg';
import Link from "next/link";
import CustomToolTop from "@/components/main/tooltip_custom";
import {usePathname} from "next/navigation";

const ProjectPreview = ({item,link}) => {

     const pathname = usePathname();

     const [truncatedText, setTruncatedText] = useState("");
     const maxLength = 322; // Установите максимальное количество символов

     useEffect(() => {
          const text = item.preview.description
          if (text.length > maxLength) {
               setTruncatedText(text.substring(0, maxLength) + "…");
          } else {
               setTruncatedText(text);
          }
     }, []);

     return (
          <div className="preview-card">
               <Link href={link} >
               <div className="preview-card-image">
                    <Image src={item.preview.image} width="455" height="266" alt='project image'/>
               </div>
               <div className="preview-card-wrapper">
                    <div className="preview-card-title">
                         <h2><CustomToolTop text='go to project overview'> {item.preview.title}</CustomToolTop></h2>
                    </div>
                    <div className="preview-card-description">
                         <p>{truncatedText}
                         </p>
                    </div>
                    <div className="preview-card-bottom-line">
                         <div className="line-item">
                              <Image src={pinIcon} height={29} alt='pin icon'/><span>{item.preview.tags}</span>
                         </div>
                         <div className="line-item">
                              <Image src={calendarIcon} height={29} alt='pin icon'/> <span>{item.preview.postDate}</span>
                         </div>
                    </div>
               </div>
               </Link>
          </div>
     );
};

export default ProjectPreview;
