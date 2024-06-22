"use client"
import React from 'react';
import './index.scss'
import LogoBackground from '../../../assets/panel/image/dashboard-logo-inner.png';
import Image from "next/image";
import {Chart} from "react-google-charts";

const DashBoard = () => {

      const dataLine = [
          // ["Year", "users"],
          // ["09-01", 1000],
          // ["09-02", 1170],
          // ["09-03", 660],
          // ["10-04", 1730],
          // ["11-04", 330],
          // ["12-04", 730],
           ["Year", "New Project", "Scam Project"],
           ["09-01", 10, 20],
           ["09-02", 11, 4],
           ["09-03", 6, 11],
           ["10-04", 1, 2],
           ["11-05", 5, 1],
     ];

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
                    <div className="column-line schedual" style={{width:'960px'}}>
                         <p>Chart</p>
                         <div className="column-inner">
                              <Chart
                                   chartType="LineChart"
                                   width="99%"
                                   height="350px"
                                   data={dataLine}
                                   options={{
                                        title: "The graph shows the number of new and scam projects",
                                        curveType: "function",
                                        chart: {
                                             title: "Page View",
                                             subtitle: "Number of page view last 4 weeks",
                                        },
                                        legend: { position: "none" },
                                        colors: ["#85CE36","#E74C3C"],
                                        pointSize: 5, // Размер точек
                                        pointShape: 'circle', // Форма точек (по умолчанию 'circle')
                                   }}
                              />
                         </div>
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
