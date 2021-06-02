import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        users: action.payload,
      };
    case actionTypes.AUTH_START:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null,
        isAuthenticated: true,
        isLoading: false,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.payload,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
