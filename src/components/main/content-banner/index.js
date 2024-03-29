import React from 'react';
import Link from "next/link";
import Image from "next/image";

const ContentBanner = ({image}) => {

     return (
          <>
               <Link target="_blank" href="https://wizerpeople.com/"> <Image width="615" height="90" src={image} alt='banner-image' /></Link>
          </>
     );
};

export default ContentBanner;
