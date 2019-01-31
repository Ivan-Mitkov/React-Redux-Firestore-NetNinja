import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

function ProjectDetails(props) {
  console.log("Project Detail props: ", props);
  // const id = props.match.params.id;
  console.log(props.project);
  let date = null;

  if (props.project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{props.project.title}</span>
            <p>{props.project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {props.project.authorFirstName} 
              {props.project.authorLastName}
            </div>
            <div>
              Posted at:{" "}
              {new Date(props.project.createdAt.seconds * 1000).toDateString()}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{''}</span>
            <p>{''}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {''}</div>
            <div>Posted at: {''}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : false;
  // console.log("Project Detailes state: ", state);
  // calling projects: from root reducer get project wich is projectReducer and from init state of project reducer get projects
  return { project: project };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }]) // sync projects collection from Firestore into redux
)(ProjectDetails);
