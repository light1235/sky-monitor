"use client"
import React from 'react';
import './index.scss'
import { Chart } from "react-google-charts";


export const data = [
     ["Country", "Visitors"],
     ["Germany", 200],
     ["United States", 300],
     ["Brazil", 400],
     ["Canada", 500],
     ["France", 600],
     ["RU", 700],
];
export const dataPage = [
     ["March", "page turn"],
     ["1", 1000 ],
     ["2", 1170],
     ["3", 660 ],
     ["4", 1030],

];
export const dataLine = [
     ["Year", "users"],
     ["09-01", 1000],
     ["09-02", 1170],
     ["09-03", 660],
     ["10-04", 1730],
     ["11-04", 330],
     ["12-04", 730],
];



const SeoStat = () => {
     return (
          <section className="seo-stat--page">
               <div className="block-wrapper">
                    <div className="page-stat">
                         {
                              <Chart
                                   chartType="Bar"
                                   width="100%"
                                   height="250px"
                                   data={dataPage}
                                   options={{
                                        chart: {
                                             title: "Page View",
                                             subtitle: "Number of page view last 4 weeks",
                                        },
                                        vAxis: {
                                             textPosition: 'none' // Убираем метки на оси Y
                                        },
                                        colors: ["#85CE36"], // Устанавливаем цвет колонок
                                   }}
                              />
                         }
                    </div>
                    <div className="page-stat data-line">
                         <Chart
                              chartType="LineChart"
                              width="100%"
                              height="250px"
                              data={dataLine}
                              options={{
                                   title: "Number of unique visitors",
                                   curveType: "function",
                                   chart: {
                                        title: "Page View",
                                        subtitle: "Number of page view last 4 weeks",
                                   },
                                   legend: { position: "none" },
                                   colors: ["#85CE36"],
                                   pointSize: 5, // Размер точек
                                   pointShape: 'circle', // Форма точек (по умолчанию 'circle')
                              }}
                         />
                    </div>
               </div>
               <div className="geo-wrap">
                    <div className="page-block geo-stat">
                         {<Chart
                              chartEvents={[
                                   {
                                        eventName: "select",
                                        callback: ({chartWrapper}) => {
                                             const chart = chartWrapper.getChart();
                                             const selection = chart.getSelection();
                                             if (selection.length === 0) return;
                                             const region = data[selection[0].row + 1];
                                             console.log("Selected : " + region);
                                        },
                                   },
                              ]}
                              chartType="GeoChart"
                              width="100%"
                              height="600px"
                              data={data}
                              options={{
                                   legend: "none",
                                   colorAxis: {
                                        minValue: 0, // Установите минимальное значение
                                        colors: ['black', '#85CE36'],// Установите цвета, чтобы скрыть линию
                                   },
                              }}

                         />}
                    </div>
               </div>

          </section>

     );
};

export default SeoStat;
