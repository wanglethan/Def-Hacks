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
                <div className="col-4">
                  <div className="jumbotron bg-info">
                    <h4 className="text-white">
                      Number of Patients Currently Admitted
                    </h4>
                    <h1 className="display-4 text-white">324</h1>
                  </div>
                </div>
                <div className="col-8">
                  <div className="jumbotron bg-dark">
                    <h4 className="text-white">
                      Manage Patients
                    </h4>
                    <br></br>
                    <button className="btn btn-success mx-4 my-3 btn-lg">Admit Patient</button>
                    <button className="btn btn-danger mx-4 my-3 btn-lg">Remove Patient</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default PatientManagementPage;