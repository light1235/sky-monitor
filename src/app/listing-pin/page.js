import React from 'react';
import './index.scss'
import ListingImage from '../../assets/main/images/listing-service.jpg'
import Image from "next/image";

const ListingPinPackage = () => {
     return (
          <div className="listing-service__page">
               <div className="page-container">
                    <h1>Pin service includes raising and fixing your project listing to the first position in the
                         Overview section</h1>
                    <h2>How does it work? </h2>
                    <p>Gradually with the release of new projects the original ones will move
                         according to the order displacing each other, your project, which was displaced by others will
                         again be on the first places and will be fixed on the first position that will improve the
                         visibility, reputation and rating of your project.</p>
                    <Image src={ListingImage} alt={'example image'}/>
                    <h3>Features of the service (Subtleties)</h3>
                    <ul>
                         <li><p>The project will be raised and locked in the Overview section.</p></li>
                         <li><p>The project is not moved by new released projects</p></li>
                         <li><p>Project after the end of the period of fixing time (Term which you choose when
                              activating this service) begins to move down when new projects are released. </p></li>
                         <li><p>The project will be moved down one unit if other projects use the same service. </p>
                         </li>
                    </ul>
                    <h3>Advantages</h3>
                    <ul>
                         <li><p><strong>Increased visibility:</strong> Your project will become more visible in this
                              segment, which will attract more attention from potential investors and users.</p></li>
                         <li><p><strong>Improved reputation:</strong> Since your project will be at the top of the list,
                              people will first of all participate in your project and leave positive votes that will
                              create a certain rating for your project that will increase trust and loyalty.</p></li>
                         <li><p><strong>Increased investment:</strong> As the visibility and reputation of a project
                              improves, the likelihood of attracting new investors interested in supporting a successful
                              and promising project increases. </p></li>
                         <li><p>Fixing your project in the top of the section-which will bring constant, additional
                              attention of the audience to your project as well as increase investment in it. </p>
                         </li>
                    </ul>
                    <h3>"As a result, utilizing our service to elevate and anchor up your Pin project will lead to its
                         significant growth and development, increased customer base and investment appeal."</h3>
                    <h3> Follow the simple steps to purchase the Pin service: </h3>
                    <ul>
                         <li><p>Click at the top of the website + Add program </p></li>
                         <li><p>Select Pin&Raise and press continue</p></li>
                         <li><p>A pop-up window will appear ( Fill it in step by step)</p>
                         </li>
                    </ul>
                    <h3>Form filling:</h3>
                    <ul>
                         <li><p>Specify your company name “Example - Skorpions ”</p></li>
                         <li><p>In the form, the “Your listing” field, the project that has already been placed by you on the monitor will be pulled up automatically.</p></li>
                         <li><p>In the “Service” section, select the “Pin” service.</p> </li>
                              <li><p>Select the validity period.</p></li>
                              <li><p>Click continue and pay.</p></li>
                              <li><p>Specify the payment method that suits you.</p></li>
                              <li><p>Pay for this service, after checking your project will be raised and fixed on the first place in the section corresponding to your project.</p></li>

                    </ul>
               </div>
          </div>
     );
};

export default ListingPinPackage;
