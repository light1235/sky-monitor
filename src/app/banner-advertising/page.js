import React from 'react';
import './index.scss'
import HeaderBanner from '../../assets/main/images/header-banner.jpg'
import ListingBanner from '../../assets/main/images/listing-banner.jpg'
import Image from "next/image";

const BannerPackages  = () => {
     return (
          <div className="banner__page">
               <div className="page-container">
                    <h1><strong>Banner is an advertising image or ad on a website that draws users' attention to a
                         company's products or services</strong></h1>
                    <h2>To promote your project we offer you 2 types of banners:</h2>
                    <ul>
                         <li><p>Top ( Header ) Banner </p></li>
                         <li><p>Lower ( Listing ) Banner </p></li>
                    </ul>
                    <h3>Header - The banner is located on the main page at the top of the site, the advertisement gets
                         in the field of vision of the audience attracting its attention with your offer. </h3>
                    <Image src={HeaderBanner} alt="faq image"></Image>
                    <p> Technical features
                         Permanently visible 3 banners that will change in a circle every 5 seconds.
                         Accordingly, after purchasing the “Header Banner” service, your advertisement will appear in
                         the feed for 5 seconds in one of the three banners, attracting the audience.
                         (Frequency of display depends on the number of projects using the Header Banner service).
                    </p>
                    <h3>Listing - The banner is located at the bottom of the site and is shown to the user when
                         searching for a suitable project for him - the banner will help to get interested in your
                         project, familiarize with it and participate in it </h3>
                    <Image src={ListingBanner} alt="faq image"></Image>
                    <p> Technical features
                         At the bottom of the site every 6 projects will be reflected 2 banners.
                         Display order - When your banner appears -5 seconds
                         Display method - Chaotic
                         Accordingly, after purchasing the service “Listing banner” every 6 elements of the listing of
                         projects in the lower part of the site will be shown 2 banners.
                         1 of them will be yours, which will be shown for 5 seconds and after the expiration of the
                         period will be replaced by another one, after your banner can be shown in another place also
                         with displaying for 5 seconds.
                         (Frequency of display depends on the number of projects using the Listing Banner service )</p>
                    <h3>Follow the simple steps to purchase the Banner service:</h3>
                    <ul>
                         <li><p>Click at the top of the website + Add program </p></li>
                         <li><p>Select Banner and click continue </p></li>
                         <li><p>A pop-up window will appear ( Fill it in step by step) </p></li>
                    </ul>
                    <h3>Form filling:</h3>
                    <ul>
                         <li><p>Specify the name of your site “Example - skorpions”</p></li>
                         <li><p>Specify Site Url - this is the address of your site Example
                              “https://www.skorpions.com"</p></li>
                         <li><p>Click on the + and add a picture for your Banner</p></li>

                         <li><p>Enter your valid email in the field “Example - skorpions@gmail.com”</p></li>
                         <li><p>Select the period of validity of the Banner</p></li>
                         <li><p>Select the Banner category that suits you “ Header or Listing ”</p></li>
                         <li><p>Click continue and pay</p></li>
                         <li><p>Specify the payment method that suits you</p></li>
                         <li><p>Pay for this service, after moderation your Banner will be advertised to users of the project</p></li>
                    </ul>
               </div>
          </div>
     );
};

export default BannerPackages;
