import React from 'react';
//import Axios from "axios";
//import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Advisors from './components/advisors.js';
import Managepolicies from './components/managepolicies.js';
import Newpolicy from './components/newpolicy.js';
import Register from './components/register.js';


// import Profile from './components/profile.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
/* <Route path= "/register" exact component={Register}  /> */

function App() {
  return (
  <div>
  <Router>
    <Navbar/>
    <Switch>
      <Route path= "/advisors" exact component={Advisors} />
      <Route path= "/managepolicies" exact component={Managepolicies}  />
      <Route path= "/newpolicy" exact component={Newpolicy}  />
      <Route path= "/register" exact component={Register}  />


    </Switch>
  </Router>
      </div >
 
      );
}

export default App;
