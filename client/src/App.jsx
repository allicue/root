import React from 'react'
import Header from "./components/shared/Header/Header"
import './App.css';
import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Route exact path="/" component={Header} />
    </div>
  );
}

export default App;
