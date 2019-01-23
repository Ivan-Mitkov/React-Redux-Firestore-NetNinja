import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  console.log(projects);

   
    return (
      <div  className="project-list section">
       {
         projects&&projects.map(x=>{
           return (
             <ProjectSummary key={x.id} project={x} />
           )
         })

       }
      </div>
    );
 
};

export default ProjectList;
