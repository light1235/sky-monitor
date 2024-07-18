import React from 'react';
import Link from "next/link";
import Image from "next/image";

const ContentBanner = ({image, url}) => {

     return (
          <>
               <Link target="_blank" href="https://www.google.com/"> <Image width="615" height="90" src={image} alt='banner-image' /></Link>
          </>
     );
};

export default ContentBanner;
