import React from 'react';
import './index.scss'
import {Link} from '@/i18n/routing.public'
import { useLocale } from 'next-intl';

const NewsLine = ({image,item}) => {

     const locale = useLocale();
     return (
          <Link   href={`/projects/${item.slug.replace(/\s+/g, '-')}`} className="news-information-line">
               <div className="line-items">
                    <div className="item-logo">{image}</div>
                    <div className="item-name">{locale === "en" ? item.preview.description : item.preview.descriptionRU}</div>
               </div>
          </Link>
     );
};

export default NewsLine;

