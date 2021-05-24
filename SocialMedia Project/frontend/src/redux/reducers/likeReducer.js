import * as actionTypes from "../actions/actionTypes";

const initialState = {
  like: [],
  likeData: {},
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIKE_SUCCESS:
      return {
        ...state,
        like: action.payload,
      };
    case actionTypes.ADD_LIKE_SUCCESS:
      return {
        ...state,
        likeData: action.payload,
      };

    case actionTypes.DELETE_LIKE_SUCCESS:
      console.log(state.like);
      return {
        ...state,
        likeData: state.likeData.filter(
          (postItem) => postItem.id != action.payload
        ),
      };
    default:
      return state;
  }
};

export default likeReducer;
