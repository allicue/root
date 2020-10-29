import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PoliciesInitiatives from './screens/PoliciesInitiatives/PoliciesInitiatives'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={PoliciesInitiatives}/> // remember to change path to = './policies-initiatves'
          

      </Switch> 
    </div>
  );
}

export default App;
