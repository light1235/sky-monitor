"use client"
import React, {useState} from 'react';
import './index.scss'
import CustomSearch from "@/components/panel/custom-search";
import SelectProject from "@/components/panel/select-project";
import InsuranceItem from "@/components/panel/insurance-item";
import CustomPagination from "@/components/panel/pagination";
import usePagination from "@/utils/hooks/usePagination";

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

     const [userData, setUserData] = useState([
          {
               name: "John Doe",
               email: "john.doe@example.com",
               data: "2024-10-05",
               status: "normal"
          },
          {
               name: "Jane Smith",
               email: "jane.smith@example.com",
               data: "2024-09-15",
               status: "low"
          },
          {
               name: "Alex Johnson",
               email: "alex.johnson@example.com",
               data: "2024-08-30",
               status: "high risk"
          },
          {
               name: "Maria Garcia",
               email: "maria.garcia@example.com",
               data: "2024-07-20",
               status: "normal"
          },
          {
               name: "David Brown",
               email: "david.brown@example.com",
               data: "2024-06-12",
               status: "normal"
          },
          {
               name: "Olivia Williams",
               email: "olivia.williams@example.com",
               data: "2024-05-18",
               status: "normal"
          },
          {
               name: "Liam Davis",
               email: "liam.davis@example.com",
               data: "2024-04-27",
               status: "high risk"
          },
          {
               name: "Sophia Martinez",
               email: "sophia.martinez@example.com",
               data: "2024-03-12",
               status: "low"
          },
          {
               name: "James Anderson",
               email: "james.anderson@example.com",
               data: "2024-02-10",
               status: "normal"
          },
          {
               name: "Emily Taylor",
               email: "emily.taylor@example.com",
               data: "2024-01-25",
               status: "high risk"
          },
          {
               name: "Michael Thomas",
               email: "michael.thomas@example.com",
               data: "2023-12-15",
               status: "low"
          },
          {
               name: "Ava White",
               email: "ava.white@example.com",
               data: "2023-11-08",
               status: "normal"
          },
          {
               name: "William Harris",
               email: "william.harris@example.com",
               data: "2023-10-20",
               status: "high risk"
          },
          {
               name: "Isabella Clark",
               email: "isabella.clark@example.com",
               data: "2023-09-17",
               status: "low"
          },
          {
               name: "Benjamin Lewis",
               email: "benjamin.lewis@example.com",
               data: "2023-08-05",
               status: "normal"
          }
     ]);

     const [searchTerm, setSearchTerm] = useState('');
     const filteredUsers = userData.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
     );

     const itemsPerPage = 7;

     const { currentItems: paginatedUsers, handlePageChange: handlePageChangeUsers, currentPage: currentPageUsers } = usePagination(filteredUsers, itemsPerPage, searchTerm);


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
                              <span className="item-content-top">Investment Date</span>
                              <span className="item-content-top">Status</span>
                         </div>
                         {paginatedUsers.map((item,index) =>
                              <InsuranceItem item={item} key={index}  back={index % 2 === 0 ? " " : "#fcfcfd"} />
                         )}


                    </div>
                    <div className="table-wait"></div>
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
