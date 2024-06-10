import React from 'react';
import './index.scss'
import LogoBackground from '../../../assets/panel/image/dashboard-logo-inner.png';
import Image from "next/image";

const DashBoard = () => {
     return (
          <div className="dashboard">
               <div className="dashboard-decoration">
                    <Image src={LogoBackground} alt="cosmonaft" />
               </div>
               <div className="dashboard-inner">
                    <div className="column-line services">
                         <p>Services</p>
                         <div className="column-inner">1</div>
                    </div>
                    <div className="column-line vote">
                         <p>Voting</p>
                         <div className="column-inner">1</div>
                    </div>
                    <div className="column-line Favorites">
                         <p>Favorites</p>
                         <div className="column-inner">1</div>
                    </div>
                    <div className="column-line schedual">
                         <p>Chart</p>
                         <div className="column-inner">1</div>
                    </div>
                    <div className="column-line news">
                         <p>News</p>
                         <div className="column-inner">1</div>
                    </div>
               </div>
          </div>
     );
};

export default DashBoard;
