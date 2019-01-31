import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  console.log(projects);

  return (
    <div className="project-list section">
      {projects &&
        projects.map(x => {
          return (
            <Link to={`/project/${x.id}`} key={x.id}>
              <ProjectSummary  project={x} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
