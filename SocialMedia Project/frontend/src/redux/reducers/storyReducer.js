import * as actionTypes from "../actions/actionTypes";

const initialState = {
  story: [],
  storyData: {},
};

const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STORY_SUCCESS:
      return {
        ...state,
        story: action.payload,
      };
    case actionTypes.ADD_STORY_SUCCESS:
      return {
        ...state,
        storyData: action.payload,
      };

    default:
      return state;
  }
};

export default storyReducer;
