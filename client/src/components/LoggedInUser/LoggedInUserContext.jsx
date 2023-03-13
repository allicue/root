import React, { createContext, useReducer, useContext } from 'react';

const LoggedInUserContext = createContext();

function LoggedInUserProvider({ children, reducer, initialState }) {
  const getUserState = () => {
    const currentUser = JSON.parse(localStorage.getItem('current-user'));
    if (!!currentUser) {
      return { loggedInUser: currentUser };
    }
    return initialState;
  };

  return (
    <LoggedInUserContext.Provider value={useReducer(reducer, getUserState())}>
      {children}
    </LoggedInUserContext.Provider>
  );
}

const useStateValue = () => useContext(LoggedInUserContext);
export { LoggedInUserContext, LoggedInUserProvider, useStateValue };
