import * as actionTypes from "../actions/actionTypes";

const initialState = {
  commentData: {},
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        commentData: action.payload,
      };

    default:
      return state;
  }
};

export default commentReducer;
