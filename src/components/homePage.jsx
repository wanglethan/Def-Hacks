import React, { Component } from "react";
class HomePage extends Component {
  state = {};

  login = () => {
      //LOGIN FUNCTION HERE
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            COVID Traffic Control
          </a>
        </nav>
        <div className="align-self-center">
          <h1 className="display-2 m-3" style={{ textAlign: "center" }}>
            COVID Traffic Control
          </h1>
          <div className="horizontal-line"></div>
          <div className="container" style={{ marginTop: "30px" }}>
            <div className="row">
              <div
                className="col md-6 m-5 bg-dark rounded p-5"
                style={{ textAlign: "center" }}
              >
                <h2 className="lead p-3 text-white">
                  Healthcare Professional Login
                </h2>
                <button className="btn btn-lg btn-light m-3" onClick={this.login}>Sign In</button>
              </div>
              <div
                className="col md-6 m-5 bg-dark rounded p-5"
                style={{ textAlign: "center" }}
              >
                <h2 className="lead p-3 text-white">User Login</h2>
                <button className="btn btn-lg btn-light m-3">Launch Map</button>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <span className="text-muted">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.ontario.ca/page/how-ontario-is-responding-covid-19"
              >
                Click here to get the latest COVID-19 updates for Ontario
              </a>
            </span>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default HomePage;