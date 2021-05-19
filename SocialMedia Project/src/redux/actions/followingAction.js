import * as actionTypes from "./actionTypes";
import { getFollowing, addFollowing } from "../../api/followingApi";

// get following user
export const getFollowingStart = () => {
  return {
    type: actionTypes.GET_FOLLOWING_START,
  };
};

export const getFollowingSuccess = (data) => {
  return {
    type: actionTypes.GET_FOLLOWING_SUCCESS,
    payload: data,
  };
};
export const getFollowingFail = (error) => {
  return {
    type: actionTypes.GET_FOLLOWING_FAIL,
    payload: error,
  };
};

export function getUserFollowing() {
  return function (dispatch) {
    dispatch(getFollowingStart());
    getFollowing()
      .then((response) => {
        if (response.status === 200) {
          dispatch(getFollowingSuccess(response.data));
        }
      })
      .catch((error) => {
        dispatch(getFollowingFail(error));
      });
  };
}

// add following user
export const addFollowingSuccess = (data) => {
  return {
    type: actionTypes.ADD_FOLLOWING_SUCCESS,
    payload: data,
  };
};

export function addUserFollowing(userId) {
  return function (dispatch) {
    addFollowing(userId)
      .then((response) => {
        if (response.status === 200) {
          dispatch(addFollowingSuccess);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
