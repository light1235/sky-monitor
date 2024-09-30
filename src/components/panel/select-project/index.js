import React from 'react';
import './index.scss'

const ProjectItem = ({item,transfer,length}) => {
     return (
          <div className="project-item" onClick={() => transfer(item)}>
               <div className="item-name">{item.projectName}</div>
               <div className="item-icon">{length < 5 ?"-" :'+'}</div>
          </div>
     );
};

export default ProjectItem;
