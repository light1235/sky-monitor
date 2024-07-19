import React from 'react';
import './index.scss'
import Image from "next/image";
import ProjectPin from '../../assets/main/images/pin-project.jpg'

const PinProjectPackage = () => {
     return (
          <div className="pin-project__page">
               <div className="page-container">
                    <h1><strong>News anchoring service</strong></h1>
                    <h3>This is an opportunity to fix your project on the first place in the news feed, which will allow
                         your content to remain in a prominent place in the news feeds for a long time. </h3>
                    <Image src={ProjectPin} alt={'example image'}/>
                    <h3>Benefits of anchoring news for investment projects:</h3>
                    <ul>
                         <li><p>In an oversaturated environment, an anchoring service helps your content stand out,
                              getting it more views and interactions.</p></li>
                         <li><p>Pinning increases content visibility several times, useful for new products or important
                              announcements.</p></li>
                         <li><p><strong>Increased visibility:</strong> the news stays in a prominent place, which increases its chances
                              of being noticed.</p></li>
                         <li><p><strong>Increased trust:</strong> anchored content is perceived as meaningful and authoritative, which builds audience trust.</p></li>
                         <li><p><strong>Attracting investors:</strong> through visibility and credibility, your news attracts more potential investors.</p></li>
                    </ul>
               </div>
          </div>
     );
};
export default PinProjectPackage;
