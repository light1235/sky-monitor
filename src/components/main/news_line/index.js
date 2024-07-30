import React from 'react';
import './index.scss'
import Link from "next/link";

const NewsLine = ({image,item}) => {
     return (
          <Link target="_blank" href={`/projects/${item.slug.replace(/\s+/g, '-')}`} className="news-information-line">
               <div className="line-items">
                    <div className="item-logo">{image}</div>
                    <div className="item-name">{item.preview.description}</div>
               </div>
          </Link>
     );
};

export default NewsLine;

