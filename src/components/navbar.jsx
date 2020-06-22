import React, { Component } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import {Link} from 'react-router-dom'

class Navbar extends Component {
  state = {
    user: null,
    myBool: false
  };

  signOut = () => {
    let state = this;
    firebase.auth().signOut().then(function () {
      console.log("Signed out");
      state.props.loginHandler.userData = null;
      state.forceUpdate();
    }, function (error) {
      console.error("Sign Out Error", error);
    });
  }

  render() {
    this.props.loginHandler.state = this;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <Link to="/">
          <a className="navbar-brand">COVID Traffic Control</a>
        </Link>
        {this.props.loginHandler.userData != null ? (
          <span className="navbar-text mr-xs-2">
            Hello, {this.props.loginHandler.userData.displayName}
            <img
              className="mx-2 rounded-circle"
              src={this.props.loginHandler.userData.photoURL}
              style={{ width: 25 }}
              alt="User profile"
            />
            <Link to="/"><button className="btn btn-sm btn-primary" onClick={this.signOut}>
              Sign Out
            </button></Link>
          </span>
        ) : null}
      </nav>
    );
  }
}

export default Navbar;