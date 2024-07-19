import React from 'react';
import './index.scss'
import PopUpImage from '../../assets/main/images/service-pop-up.jpg'
import Image from "next/image";

const PopUpPackages  = () => {
     return (
          <div className="pop-up-service__page">
               <div className="page-container">
                    <h1><strong>Popup banner </strong></h1>
                    <h3>Is a popup on a website that shows important information, offer or promotion to grab the
                         attention of users.</h3>

                    <Image src={PopUpImage} alt={'example image'}/>
                    <p>Shows ads once to the user who visited the site, when you log in again will not be shown.
                         The advantage of this advertisement is that it will be seen by all users who visit the
                         site</p>
                    <h3>What you need to do to order this service:</h3>
                    <ul>
                         <li><p>On the main menu at the very top of the site find and click on add program</p></li>
                         <li><p>In the Pop-up window will appear 3 options to add ads, choose (Pop-up)</p></li>
                         <li><p>Fill in the pop-up window with the specified parameters from the beginning and in
                              order </p></li>
                    </ul>
                    <h3>Form filling:</h3>
                    <ul>
                         <li><p>Specify the name of your site “Example - skorpions”</p></li>
                         <li><p>Specify a description of what the user should see in the pop-up ad “Example”-Promising project that has been on the market for more than 5 years Hamster Kombat</p></li>
                         <li><p>Specify Site Url -this is the address of your site “Example -https://www.skorpions.com/</p></li>
                         <li><p>Click on + and add a picture for your Pop-up in size 123x123 in format (jpg,png,gif)</p></li>
                         <li><p>Enter your valid email in the field “Example - skorpions@gmail.com”</p></li>
                         <li><p>Select the period of validity of the Pop-ap </p></li>
                         <li><p>Specify the payment method that suits you and click on the button “Proceed to payment”.</p></li>
                         <li><p>Pay for this service, after moderation your Pop-up will be advertised to users of the project. </p></li>
                    </ul>
               </div>
          </div>
     );
};

export default PopUpPackages;
