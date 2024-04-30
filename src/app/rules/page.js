import React from 'react';
import './index.scss'
import Image from "next/image";
import RulesImage from '../../assets/main/images/rules-image-1.jpg'

const Rules = () => {
     return (
          <section className="rules__page">
               <div className="page-container">
                    <Image src={RulesImage} alt="rules image"/>
               </div>
          </section>
     );
};

export default Rules;
