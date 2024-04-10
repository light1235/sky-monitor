"use client"
import React, {useEffect, useState} from 'react';
import {Carousel} from "antd";
import HeroBanner from '../../../assets/main/images/head-b-8.jpg';
import HeroBanner1 from '../../../assets/main/images/head-b-9.jpg';
import Link from "next/link";
import Image from "next/image";


const TestBlock = () => {

     const [isLoaded, setIsLoaded] = useState(false);

     useEffect(() => {
          setIsLoaded(true);
     }, []);

     return (
          <>
               {isLoaded && (
                    <Carousel autoplay slidesToShow={3} responsive={[
                         {
                              breakpoint: 768,
                              settings: {
                                   slidesToShow: 1,
                              },
                         },
                    ]}>
                         <div style={{ display: "grid" }}>
                              <Link target="_blank" href='/'>
                                   <Image src={HeroBanner} alt="banner"></Image>
                              </Link>
                         </div>
                         <div>
                              <Link target="_blank" href='/'>
                                   <Image src={HeroBanner1} width="369" height="170" alt="banner"></Image>
                              </Link>
                         </div>
                         <div>
                              <Link target="_blank" href='/'>
                                   <Image src={HeroBanner} alt="banner"></Image>
                              </Link>
                         </div>
                         <div>
                              <Link target="_blank" href='/'>
                                   <Image src={HeroBanner1} alt="banner"></Image>
                              </Link>
                         </div>
                    </Carousel>
               )}
          </>
     );
};

export default TestBlock;
