import React from 'react';
import './index.scss'
import Link from "next/link";

const NewsLine = ({image}) => {
     return (
          <Link target="_blank" href='/' className="news-information-line">
               <div className="line-items">
                    <div className="item-logo">{image}</div>
                    <div className="item-name">Berstake.com platform s sorata de grata ember</div>
               </div>
          </Link>
     );
};

export default NewsLine;
