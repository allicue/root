import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import PoliciesInitiatives from './screens/PoliciesInitiatives/PoliciesInitiatives';
import TransportationTypes from './screens/TransportationType/TransportationTypes';
import Header from "./components/shared/Header/Header";
import Footer from './components/shared/Footer/Footer';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/policies-and-initiatives' component={PoliciesInitiatives} />
        <Route exact path="/" component={Home} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/Footer" component={Footer} />
        <Route exact path='/transportation-types' component={TransportationTypes} />
      </Switch>
    </div>
  );
}

export default App;
