const initialState = {
  user: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, user: action.user };
    default:
      return state;
  }
}

export default userReducer;
