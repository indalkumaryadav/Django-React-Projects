import * as actionTypes from "./actionTypes";
import { searchUser } from "../../api/searchApi";

export const searchUserStart = () => {
  return {
    type: actionTypes.SEARCH_USER_START,
  };
};

export const searchUserSuccess = (data) => {
  return {
    type: actionTypes.SEARCH_USER_SUCCESS,
    payload: data,
  };
};

export const searchUserFail = (error) => {
  return {
    type: actionTypes.SEARCH_USER_FAIL,
    payload: error,
  };
};

export function searchUserData(q) {
  return function (dispatch) {
    dispatch(searchUserStart());

    searchUser(q)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          dispatch(searchUserSuccess(response.data));
        }
      })
      .catch((error) => {
        dispatch(searchUserFail(error));
      });
  };
}
