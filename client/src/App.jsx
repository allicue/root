import React from 'react'
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
    </div>
  );
}

export default App;
