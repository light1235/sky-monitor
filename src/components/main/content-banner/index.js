import React from 'react';
import Link from "next/link";
import Image from "next/image";

const ContentBanner = ({url}) => {
     return (
          <>
               <Link target="_blank" href="https://wizerpeople.com/"> <Image width="615" height="90" src={url} alt='banner-image' /></Link>
          </>
     );
};

export default ContentBanner;
