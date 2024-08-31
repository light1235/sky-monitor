import React from 'react';
import './index.scss'
import Image from "next/image";
import ListingImage from "@/assets/main/images/listing-service.jpg";

const ListingRaisePackage = () => {
     return (
          <div className="listing-raise__page">
               <div className="page-container">
                    <h1>The Raise service includes raising your project to the top of the Overview page</h1>
                    <h2>How does it work?</h2>
                    <p>Gradually with the release of new projects the original ones will move according to the order
                         displacing each other, your project, which was displaced by others will again be in the first
                         place improving visibility.</p>
                    <Image src={ListingImage} alt={'example image'}/>
                    <h3>Features (Subtleties of the service):</h3>
                    <ul>
                         <li><p>New projects that will be placed on the monitor will gradually move your project down
                              one position.
                              (At least 6 projects you will be on the first page )</p></li>
                         <li><p>A project that used a similar service will move your project down one position. </p>
                         </li>
                    </ul>
                    <h3>Advantages</h3>
                    <ul>
                         <li><p><strong>Increased visibility:</strong> Your project will become more visible, attracting
                              more attention
                              from potential investors and users.</p></li>
                         <li><p><strong>Improved reputation:</strong> Since your project will be at the top of the list,
                              people will
                              first of all participate in your project and leave positive votes that will create a
                              certain rating for your project that will increase trust and loyalty.</p>
                         </li>
                         <li><p><strong>Increased investment:</strong> As the visibility and reputation of a project
                              improves, the likelihood of attracting new investors interested in supporting a successful
                              and promising project increases.</p></li>
                    </ul>
                    <h3>"As a result, utilizing our service to uplift your project will lead to its significant growth
                         and development, increased client base and investment appeal."</h3>
                    <h3> Follow the simple steps to purchase the Raise service:</h3>
                    <ul>
                         <li><p>Click at the top of the website + Add program</p></li>
                         <li><p>Select Pin&Raise and press continue</p></li>
                         <li><p>A pop-up window will appear ( Fill it in step by step) </p>
                         </li>
                    </ul>
                    <h3>Form filling:</h3>
                    <ul>
                         <li><p>Specify your company name “Example - Skorpions ” </p></li>
                         <li><p>In the “Your listing” section, the project that has already been placed on the monitor
                              will be pulled up automatically.</p></li>
                         <li><p>In the Service section, select "Raise"</p>
                         </li>
                         <li><p>Click continue and pay </p></li>
                         <li><p>Specify the payment method that suits you</p></li>
                         <li><p>Pay for this service, after checking your project will be raised to the first place in the Overview section.     </p></li>
                    </ul>
               </div>
          </div>
     );
};

export default ListingRaisePackage;
