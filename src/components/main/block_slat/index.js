"use client"
import React from 'react';
import './index.scss';
import {useTranslation} from "react-i18next";

const BlockSlat = ({text}) => {

     const {t, i18n} = useTranslation();
     return (
          <div>
               <div className="block-slat">{t(`${text}`)}</div>
          </div>
     );
};

export default BlockSlat;
