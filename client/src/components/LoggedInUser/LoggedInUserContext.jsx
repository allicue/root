import React, { createContext, useReducer, useContext } from "react";

const LoggedInUserContext = createContext();

function LoggedInUserProvider({ children, reducer, initialState }) {
  return (
    <LoggedInUserContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </LoggedInUserContext.Provider>
  );
}

const useStateValue = () => useContext(LoggedInUserContext);
export { LoggedInUserContext, LoggedInUserProvider, useStateValue };
