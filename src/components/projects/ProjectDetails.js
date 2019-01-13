import React from "react";

function ProjectDetails(props) {
    console.log(props);
    const id=props.match.params.id;
    console.log(id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title-{id}</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, illo sapiente ab nam fuga odio? Quos recusandae ex fugiat voluptatum temporibus sapiente vel tempora dolores ratione! Cupiditate maiores tempore vitae!</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
            <div>
                Posted by The Black Ninja
            </div>
            <div>
                11/11/2018
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
