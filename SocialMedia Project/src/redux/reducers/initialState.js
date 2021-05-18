const initialState = {
  users: [],
  isAuthenticated: false,
  isLoading: false,
  token: localStorage.getItem("token"),
  error: null,
};

export default initialState;
