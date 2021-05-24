import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: [],
};

const followerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FOLLOWER_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
export default followerReducer;
