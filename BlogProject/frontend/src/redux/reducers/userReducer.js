import * as actionTypes from "../actions/actionTypes";
const userInitialState = {
  userData: {},
  profileData: {},
};
const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };

    case actionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profileData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
