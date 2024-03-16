"use client"
import React from 'react';
import './index.scss';
import { Chart } from "react-google-charts";

export const data = [
     ["Listing", "Hours per Day"],
     ["Banners", 11],
     ["Pop-up", 2],
     ["Listing", 2],
];

export const options = {
     title: "Monthly Sale",
     pieHole: 0.4,
     is3D: false,
     colors: ['#85CE36', '#EC7063', '#2E86C1'], // Устанавливаем цвета сегментов
};

const ControlPanel = () => {
     return (
          <section className="main-control-page">
               <div className="panel-block">
                    <div className="block-title">Stats</div>
                    <div className="block-description">Website stats for sky finance</div>
                    <div className="block-stats">
                         <div className="stats-item">
                              <i className="icon-chart-line"></i>
                              <div className="item-wrap">
                                   <div className="item-title">$80.560</div>
                                   <div className="item-description">Monthly income</div>
                              </div>
                         </div>
                         <div className="stats-item">
                              <i className="icon-dollar"></i>
                              <div className="item-wrap">
                                   <div className="item-title">$9076</div>
                                   <div className="item-description">Total income</div>
                              </div>
                         </div>
                         <div className="stats-item">
                              <i className="icon-address-card-o"></i>
                              <div className="item-wrap">
                                   <div className="item-title">472</div>
                                   <div className="item-description">Listing sold</div>
                              </div>
                         </div>
                         <div className="stats-item">
                              <i className="icon-audio-description"></i>
                              <div className="item-wrap">
                                   <div className="item-title">386</div>
                                   <div className="item-description">Banners sold</div>
                              </div>
                         </div>
                         <div className="stats-item">
                              <i className="icon-users"></i>
                              <div className="item-wrap">
                                   <div className="item-title">386</div>
                                   <div className="item-description">Total registered users</div>
                              </div>
                         </div>
                         <div className="stats-item">
                              <i className="icon-ticket"></i>
                              <div className="item-wrap">
                                   <div className="item-title">57</div>
                                   <div className="item-description">Ticked closed</div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="sale-block">
                    {<Chart
                         chartType="PieChart"
                         width="100%"
                         height="400px"
                         data={data}
                         options={options}
                    />}
               </div>
          </section>
     );
};

export default ControlPanel;
