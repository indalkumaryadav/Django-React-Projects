import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: [],
  followingData: {},
  isLoading: false,
  error: null,
};

const followingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FOLLOWING_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_FOLLOWING_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case actionTypes.GET_FOLLOWING_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // add user following
    case actionTypes.ADD_FOLLOWING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        followingData: action.payload,
      };
    // unfolllow user
    case actionTypes.UN_FOLLOWING_SUCCESS:
      return {
        ...state,
        followingData: action.payload,
      };
    default:
      return state;
  }
};

export default followingReducer;
