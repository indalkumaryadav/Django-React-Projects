import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_USER_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.SEARCH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };

    case actionTypes.SEARCH_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
