export const initialState = {
  loggedInUser: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        loggedInUser: action.loggedInUser,
      };
    case "EDIT_USER":
      return { loggedInUser: action.loggedInUser };
    case "LOGOUT_USER":
      return { loggedInUser: null };
    case "DESTORY_USER":
      return { loggedInUser: action.loggedInUser };
    default:
      return state;
  }
}

export default reducer;
