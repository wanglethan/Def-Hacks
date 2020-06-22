import React, { Component } from 'react';

class PatientManagementPage extends Component {
    state = {  }
    render() { 
        return (
          <div className="align-self-center">
            <h1 className="display-2 m-3">Manage Patients</h1>
            <div className="horizontal-line"></div>
            <div className="container" style={{ marginTop: "30px" }}>
              <div className="row">
                <div className="col md-4">
                  <div className="jumbotron bg-info"></div>
                </div>
                <div className="col md-9">
                  <div className="jumbotron bg-dark"></div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default PatientManagementPage;