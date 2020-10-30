import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PoliciesInitiatives from './screens/PoliciesInitiatives/PoliciesInitiatives'
function App() {
  return (
    <div>
      <Switch>
       <Route exact path='/policies-and-initiatives' component={PoliciesInitiatives} />      
      </Switch> 
    </div>
  );
}

export default App;
