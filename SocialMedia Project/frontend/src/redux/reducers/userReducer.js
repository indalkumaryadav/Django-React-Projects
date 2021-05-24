import * as actionTypes from "../actions/actionTypes";
const userInitialState = {
  user: [],
  profile: [],
  profileData: {},
  data: {},
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
    case actionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profileData: action.payload,
      };
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
