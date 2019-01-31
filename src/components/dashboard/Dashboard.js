import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import Notifications from "./Notifications";
import ProjectList from "./../projects/ProjectList";

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    // console.log(projects);
    if(projects){
      return (
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <ProjectList projects={projects} />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
          </div>
        </div>
      );
    }else{
      return(
        <div className="dashboard container">
          Loading ...
        </div>
      )
    }
    
  }
}
const mapStateToProps = state => {
  console.log(state)
  // calling projects: from root reducer get project wich is projectReducer and from init state of project reducer get projects
  return { projects: state.firestore.ordered.projects };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }]) // sync projects collection from Firestore into redux
)(Dashboard);
// export default connect(mapStateToProps)(Dashboard);
