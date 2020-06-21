import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HomePage from './components/homePage'
import 'bootstrap/dist/css/bootstrap.css'
import Maps from './maps';
import Sidebar from './components/Sidebar'
import navbar from './components/navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Route strict exact path="/" component={HomePage}/>
    <Route path="/maps" component={Maps} />
    <Route path="/maps" component={navbar} />
    <Route path="/maps" component={Sidebar} />
   
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
