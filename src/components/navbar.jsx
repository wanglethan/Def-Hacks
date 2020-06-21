import React, { Component } from 'react';
import initialize from "../firebaseconfig";
import * as firebase from "firebase/app";
import "firebase/auth";

class Navbar extends Component {
  state = {
    username: this.props.username,
    userpfp: this.props.userpfp
  };

  signOut = () => {
    firebase.auth().signOut().then(function () {
      console.log("Signed out");
    }, function (error) {
      console.error("Sign Out Error", error);
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <a className="navbar-brand" href="#">
          COVID Traffic Control
            </a>
        {this.props.username != null ? (
          <span className="navbar-text mr-xs-2">
            Hello, {this.props.username}
            {this.props.userpfp != null ? (
              <img
                className="mx-2 rounded-circle"
                src={this.props.userpfp}
                style={{ width: 25 }}
              />
            ) : null}
            <button className="btn btn-sm btn-primary" onClick={this.signOut}>Sign Out</button>
          </span>
        ) : null}
      </nav>
    );
  }
}

export default Navbar;