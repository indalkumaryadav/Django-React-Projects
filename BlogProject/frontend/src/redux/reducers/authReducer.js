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
        error: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token: action.payload,
        error: null,
        user: action.payload,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
        token: null,
      };

    // logout
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };

    // register

    case actionTypes.REGISTER_START:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        token: null,
        error: null,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token: action.payload,
        error: null,
      };
    case actionTypes.REGISTER_FAIL:
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
