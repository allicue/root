import React from 'react'
<<<<<<< HEAD
import { Route, Switch, Link } from 'react-router-dom'
import TransportationTypes from './screens/TransportationType/TransportationTypes'
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/TransportationTypes">transportation</Link>
      <Switch>
        <Route exact path='/TransportationTypes' component={TransportationTypes} />
      </Switch>
=======
import { Route, Switch } from 'react-router-dom'
import PoliciesInitiatives from './screens/PoliciesInitiatives/PoliciesInitiatives'
import Header from "./components/shared/Header/Header"
        
function App() {
  return (
    <div>
      <Switch>
       <Route exact path='/policies-and-initiatives' component={PoliciesInitiatives} />  
       <Route exact path="/" component={Header} />
      </Switch> 
>>>>>>> 530e5b7ee0f38c058f9603e537404c057c1bca97
    </div>
  );
}

export default App;
