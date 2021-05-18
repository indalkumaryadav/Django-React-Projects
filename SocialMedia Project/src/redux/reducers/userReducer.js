import * as actionTypes from "../actions/actionTypes";
const userInitialState = {
  user: [],
  profile: [],
};
const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
