import React from "react";

const ProjectSummary = (props) => {
 
  const {project}=props
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by the Black Ninja</p>
          <p className='grey-text'>13/1/2019</p>
        </div>
      </div>
     </div>
  );
};

export default ProjectSummary;
