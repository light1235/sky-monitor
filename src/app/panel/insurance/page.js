"use client"
import React, {useState} from 'react';
import './index.scss'
import CustomSearch from "@/components/panel/custom-search";
import SelectProject from "@/components/panel/select-project";

const Insurance = () => {
     const [projects, setProjects] = useState([
          {projectName:'Razzelton'},
          {projectName:'Razzelton'},
          {projectName:'razzelton'},
          {projectName:'razzelton'},
          {projectName:'razzelton'},
          {projectName:'razzelton'},
          {projectName:'razzelton'},
          {projectName:'razzelton'},
          {projectName:'razzelton'},
          {projectName:'razzelton'},
          {projectName:'razzelton'},
          {projectName:'razzelton'},
          {projectName:'Razzelton'},
     ]);
     const [selectedProject, setSelectedProject] = useState([]);

     const handleTransfer = (item) => {
          if (selectedProject.length < 4) {
               setProjects(projects.filter((el) => el !== item));
               setSelectedProject([...selectedProject, item]);
          } else {
               alert('Массив Б может содержать максимум 4 элемента.');
          }
     };
     const handleTransferToBack = (item) => {
          setSelectedProject(selectedProject.filter((el) => el !== item));
          setProjects([...projects, item]);
     };


     return (
          <div className="insurance__page">
               <div className="page-top-bar">
                    <h2>User Lvl</h2>
                    <div className="bar-search">
                         <CustomSearch />
                    </div>
               </div>
               <div className="top-table">
                    <div className="table-select">
                         {projects.map((item,index) =>
                              <SelectProject item={item} key={index} transfer={handleTransfer}  />
                         )}
                    </div>
                    <div className="table-selected">
                         {selectedProject.map((item, index) => (
                              <SelectProject item={item} key={index} length={selectedProject.length}  transfer={handleTransferToBack}  />
                         ))}
                    </div>
               </div>
               <div className="middle-table"></div>
          </div>
     );
};

export default Insurance;
