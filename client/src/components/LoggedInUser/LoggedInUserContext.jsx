import React, { useState } from "react";

const LoggedInUserContext = React.createContext([{}, () => {}]);

function LoggedInUserProvider(props) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <LoggedInUserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {props.children}
    </LoggedInUserContext.Provider>
  );
}

export { LoggedInUserContext, LoggedInUserProvider };
