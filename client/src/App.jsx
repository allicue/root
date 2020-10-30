import React from 'react'
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
    </div>
  );
}

export default App;
