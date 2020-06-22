import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import {Link} from 'react-router-dom';

class HomePage extends Component {
  state = {
  };

  login = () => {
    //LOGIN FUNCTION HERE
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    
    return firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <React.Fragment>
        <div className="align-self-center">
          <h1 className="display-2 m-3">COVID Traffic Control</h1>
          <div className="horizontal-line"></div>
          <div className="container" style={{ marginTop: "30px" }}>
            <div className="row">
              <div
                className="col md-3 m-5 bg-dark rounded p-5"
              >
                <h2 className="lead p-3 text-white">
                  Healthcare Professional Login
                </h2>
                <button className="btn btn-lg btn-light m-3" onClick={() => this.props.loginHandler.setUser(this.login())}>Sign In</button>
              </div>
              <div
                className="col md-6 m-5 bg-dark rounded p-5"
              >
                <h2 className="lead p-3 text-white">User Login</h2>
                <Link to="/maps"><button className="btn btn-lg btn-light m-3">Launch Map</button></Link>
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
                Get the latest COVID-19 updates for Ontario
              </a>
            </span>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default HomePage;
