import React from 'react';
import './App.css';
import HomePage from './components/homePage'
import Navbar from './components/navbar'
import Maps from './components/maps'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar id="navbarComponent" />
      <div className="App">
        <Switch>
          <Route strict exact path="/" component={HomePage} />
          <Route path="/maps" component={Maps} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
