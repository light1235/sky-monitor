import React from 'react';
import './index.scss'
import SupportImage from '@/assets/main/images/support.jpg';
import Image from "next/image";

export const metadata = {
     title: 'Заголовок страницы',
     description: 'Описание страницы',
};

const SupportPage = () => {
     return (
          <>
               <section className="support__page">
                    <div className="page-container">
                         <Image src={SupportImage} alt="support image"></Image>
                         <h1>Welcome to Our Support Center</h1>
                         {/*<h2> How Can We Assist You Today?</h2>*/}
                         <h2>How can I register on your site?</h2>
                         <p>Click the “Registration” button in the upper right corner of the page.
                              Fill in all mandatory fields in the registration form.
                              Confirm your e-mail by clicking on the link sent to your e-mail.</p>
                         <h2>I forgot my password. What do I do?</h2>
                         <h3>If you have forgotten your password, follow these steps:</h3>
                         <p>Click the “Forgot your password?” link on the login page.
                              Enter the e-mail address you provided during registration.
                              Follow the instructions sent to your e-mail address.</p>
                         <h2>How do I contact the support team?</h2>
                         <h3>You can contact our support team using one of the following methods:</h3>
                         <p>Write us an e-mail <strong>Support@sky-finance.com</strong></p>
                         <h2>Instructions for solving common problems</h2>
                         <h3>Problems logging into the account</h3>
                         <p>Make sure you enter the correct username and password.</p>
                         <p>Check to see if the Caps Lock key is turned on.</p>
                         <p>Try resetting the password if you can't remember it.</p>
                         <h2>Problems with page loading</h2>
                         <p>Clear your browser's cache and cookies.</p>
                         <p>Try opening the site in a different browser.</p>
                         <p>Reboot your device and try again.</p>
                         <h2>Technical problems with the site</h2>
                         <p>Check for updates for your browser.</p>
                         <p>Make sure you have a stable internet connection.If the problem persists, please contact our
                              support team.</p>
                         <h3>If you still have questions or need additional assistance, don't hesitate to contact us. We
                              are always ready to help you!🖐🖐🖐</h3>
                    </div>
               </section>
          </>

     );
};

export default SupportPage;
