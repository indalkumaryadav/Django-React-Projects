import * as actionTypes from "../actions/actionTypes";

const postInitialState = {
  post: [],
  postData: null,
  isLoading: false,
};

const userReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
      };
    case actionTypes.GET_POST_FAIL:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
      };
    case actionTypes.GET_SINGLE_POST_SUCCESS:
      return {
        ...state,
        postData: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
