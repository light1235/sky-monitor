"use client"
import React from 'react';
import './index.scss';
import {useTranslations} from 'next-intl';

const BlockSlat = ({text}) => {

     const t = useTranslations();
     return (
          <div>
               <div className="block-slat">{t(`${text}`)}</div>
          </div>
     );
};

export default BlockSlat;
