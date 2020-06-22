import React from 'react';
import './App.css';
import HomePage from './components/homePage'
import Navbar from './components/navbar'
import Maps from './components/maps'
import PatientManagementPage from './components/patientManagement'
import initialize from "./services/firebaseconfig";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as firebase from "firebase/app";
import LoginHandler from './services/userData';



function App() {
  if (!firebase.apps.length) {
    initialize();
  }
  let loginData = new LoginHandler();

  return (
    <Router>
      <Navbar loginHandler={loginData} />
      <div className="App">
        <Switch>
          <Route strict exact path="/" render={(props) =>(<HomePage {...props} loginHandler={loginData} />)} />
          <Route path="/maps" component={ Maps } />
          <Route path="/dashboard" render={(props) => (<PatientManagementPage {...props} loginHandler={loginData} />)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
