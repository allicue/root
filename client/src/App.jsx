import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import PoliciesInitiatives from "./screens/PoliciesInitiatives/PoliciesInitiatives";
import TransportationTypes from "./screens/TransportationType/TransportationTypes";
import ManageTransportationTypes from "./screens/ManageTransportationType/ManageTransportationType";
import AddTransportationType from "./screens/AddTransportationType/AddTransportationType.jsx";
import SanFranPolicy from "./screens/SanFranPolicy/SanFranPolicy";
import PlanRoute from "./screens/PlanRoute/PlanRoute";
import Error from "./screens/Error/Error";
import Profile from "./screens/Profile/Profile";
import CreateAccount from "./screens/CreateAccount/CreateAccount";
import ManageAccount from "./screens/ManageAccount/ManageAccount";
import Sad from "./screens/SadToSeeYouGo/SadToSeeYouGo";
import Login from "./screens/Login/Login";
import AccountConfirm from "./screens/AccountConfirm/AccountConfirm";

function App() {
  return (
    <Switch>
      <Route path="/account-confirm" component={AccountConfirm} />
      <Route
        exact
        path="/policies-and-initiatives"
        component={PoliciesInitiatives}
      />
      <Route exact path="/san-fransisco" component={SanFranPolicy} />
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/transportation-types"
        component={TransportationTypes}
      />
      <Route
        exact
        path="/manage-transportation-types"
        component={ManageTransportationTypes}
      />
      <Route
        exact
        path="/add-transportation-type"
        component={AddTransportationType}
      />
      <Route exact path="/plan-your-route" component={PlanRoute} />
      <Route path="/create-your-account" exact component={CreateAccount} />
      <Route exact path="/sad-to-see-you-go" component={Sad} />
      <Route exact path="/manage-your-account" component={ManageAccount} />
      <Route path="/profile" component={Profile} />
      <Route path="/login" exact component={Login} />
      <Route component={Error} /> {/* keep this the lowest route */}
    </Switch>
  );
}

export default App;
