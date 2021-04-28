import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        token: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token: action.payload,
        error: null,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
