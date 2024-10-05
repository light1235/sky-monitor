"use client"
import React, {useState} from 'react';
import './index.scss'
import CustomSearch from "@/components/panel/custom-search";
import SelectProject from "@/components/panel/select-project";
import InsuranceItem from "@/components/panel/insurance-item";
import CustomPagination from "@/components/panel/pagination";
import usePagination from "@/utils/hooks/usePagination";
import WaitItem from "@/components/panel/insurance-wait-item";

const Insurance = () => {
     const [projects, setProjects] = useState([
          {projectName:'Sky Staking',staking:true},
          {projectName:'Nexora'},
          {projectName:'Quantix'},
          {projectName:'Solvion'},
          {projectName:'Veridex'},
          {projectName:'Veridex'},
          {projectName:'Zintor'},
          {projectName:'Brevia'},
          {projectName:'Astriv'},
          {projectName:'Plenox'},
          {projectName:'Dynor'},
          {projectName:'Orbion'},
          {projectName:'Flextar'},
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

          if (item.staking === true) {
               setProjects([item, ...projects]);
          } else {
               setProjects([...projects, item]);
          }
     };
     const [waitData, setWaitData] = useState([
          { name: "John Doe",waitStatus:'pending'},
          { name: "Jane Smith",waitStatus:'pending'},
          { name: "Benjamin Lewis",waitStatus:'pending'}
     ]);
     const [userData, setUserData] = useState([
          {
               name: "John Doe",
               email: "john.doe@example.com",
               start: "2024-10-05",
               end: "2024-10-05",
               status: "normal"
          },
          {
               name: "Jane Smith",
               email: "jane.smith@example.com",
               start: "2024-09-15",
               end: "2024-10-05",
               status: "low"
          },
          {
               name: "Alex Johnson",
               email: "alex.johnson@example.com",
               start: "2024-08-30",
               end: "2024-10-05",
               status: "high risk"
          },
          {
               name: "Maria Garcia",
               email: "maria.garcia@example.com",
               start: "2024-07-20",
               end: "2024-10-05",
               status: "normal"
          },
          {
               name: "David Brown",
               email: "david.brown@example.com",
               start: "2024-06-12",
               end: "2024-10-05",
               status: "normal"
          },
          {
               name: "Olivia Williams",
               email: "olivia.williams@example.com",
               start: "2024-05-18",
               end: "2024-10-05",
               status: "normal"
          },
          {
               name: "Liam Davis",
               email: "liam.davis@example.com",
               start: "2024-04-27",
               end: "2024-10-05",
               status: "high risk"
          },
          {
               name: "Sophia Martinez",
               email: "sophia.martinez@example.com",
               start: "2024-03-12",
               end: "2024-10-05",
               status: "low"
          },
          {
               name: "James Anderson",
               email: "james.anderson@example.com",
               start: "2024-02-10",
               end: "2024-10-05",
               status: "normal"
          },
          {
               name: "Emily Taylor",
               email: "emily.taylor@example.com",
               start: "2024-01-25",
               end: "2024-10-05",
               status: "high risk"
          },
          {
               name: "Michael Thomas",
               email: "michael.thomas@example.com",
               start: "2023-12-15",
               end: "2024-10-05",
               status: "low"
          },
          {
               name: "Ava White",
               email: "ava.white@example.com",
               start: "2023-11-08",
               end: "2024-10-05",
               status: "normal"
          },
          {
               name: "William Harris",
               email: "william.harris@example.com",
               start: "2023-10-20",
               end: "2024-10-05",
               status: "high risk"
          },
          {
               name: "Isabella Clark",
               email: "isabella.clark@example.com",
               start: "2023-09-17",
               end: "2024-10-05",
               status: "low"
          },
          {
               name: "Benjamin Lewis",
               email: "benjamin.lewis@example.com",
               start: "2023-08-05",
               end: "2024-10-05",
               status: "normal"
          }
     ]);

     const [searchTerm, setSearchTerm] = useState('');
     const filteredUsers = userData.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
     );

     const itemsPerPage = 7;

     const { currentItems: paginatedUsers, handlePageChange: handlePageChangeUsers, currentPage: currentPageUsers } = usePagination(filteredUsers, itemsPerPage, searchTerm);

     const handleFilterTable = (name) => {
         console.log(name);
          setSearchTerm(name);
     };

     const handleDelete = (item) => {
          setWaitData(waitData.filter(el => el !== item))

     };

     return (
          <div className="insurance__page">
               <div className="page-top-bar">
                    <h2>User Lvl</h2>
                    <div className="bar-search">
                         <CustomSearch onSearch={e => setSearchTerm(e.target.value)}/>
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
               <div className="middle-table">
                    <div className="table-content">
                         <div className="table-content-top">
                              <span className="item-content-top">User  Name</span>
                              <span className="item-content-top">Email</span>
                              <span className="item-content-top">Investment Start</span>
                              <span className="item-content-top">Investment End</span>
                              <span className="item-content-top">Project Status</span>
                         </div>
                         {paginatedUsers.map((item, index) =>
                              <InsuranceItem item={item} key={index}  back={index % 2 === 0 ? " " : "#fcfcfd"} />
                         )}
                    </div>
                    <div className="table-wait">
                         <div className="table-wait-top">
                              Wait for Pay
                         </div>
                         {waitData.map((item,index) =>
                              <WaitItem item={item} key={index} deleteItem={handleDelete} filter={handleFilterTable} />
                         )}
                    </div>
                    <CustomPagination
                         current={currentPageUsers}
                         total={filteredUsers.length}
                         pageSize={itemsPerPage}
                         onChange={handlePageChangeUsers}
                    />
               </div>
          </div>
     );
};

export default Insurance;
