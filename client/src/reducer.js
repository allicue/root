export const initialState = {
  loggedInUser: null,
};
function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      saveUser(action.loggedInUser);
      return {
        loggedInUser: action.loggedInUser,
      };
    case 'EDIT_USER':
      saveUser(action.loggedInUser);
      return { loggedInUser: action.loggedInUser };
    case 'LOGOUT_USER':
      localStorage.removeItem('current-user');
      return { loggedInUser: null };
    case 'DESTROY_USER':
      localStorage.removeItem('current-user');
      return { loggedInUser: action.loggedInUser };
    default:
      return state;
  }
}

const saveUser = (payload) =>
  localStorage.setItem('current-user', JSON.stringify(payload));

export default reducer;
