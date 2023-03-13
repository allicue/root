import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer, { initialState } from "./reducer";
import { BrowserRouter as Router } from "react-router-dom";
import { LoggedInUserProvider } from "./components/LoggedInUser/LoggedInUserContext";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <LoggedInUserProvider initialState={initialState} reducer={reducer}>
        <App />
      </LoggedInUserProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
