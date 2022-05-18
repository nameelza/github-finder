const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
