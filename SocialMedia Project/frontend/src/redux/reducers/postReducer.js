import * as actionTypes from "../actions/actionTypes";

const postInitialState = {
  post: [],
  postData: null,
};

const userReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case actionTypes.CREATE_POST_START:
      return {
        ...state,
      };
    case actionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        postData: action.payload,
      };
    case actionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        postData: action.payload,
      };
    case actionTypes.UPDATE_POST_SUCCESS:
      return {
        ...state,
        postData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
