import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PoliciesInitiatives from './screens/PoliciesInitiatives/PoliciesInitiatives'
import TransportationTypes from './screens/TransportationType/TransportationTypes'
import Header from "./components/shared/Header/Header"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/policies-and-initiatives' component={PoliciesInitiatives} />
        <Route exact path="/" component={Header} />
        <Route exact path='/transportation-types' component={TransportationTypes} />
      </Switch>
    </div>
  );
}

export default App;
