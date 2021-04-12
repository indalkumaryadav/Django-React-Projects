import * as actionType from "../actions/actionType";

const initialState = {
  token: null,
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_START:
      return {
        ...state,
        loading: true,
      };

    case actionType.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        error: null,
        loading: false,
      };

    case actionType.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actionType.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
