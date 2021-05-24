import * as actionTypes from "./actionTypes";
import { getFollower } from "../../api/followerApi";

export const getFollowerSuccess = (data) => {
  return {
    type: actionTypes.GET_FOLLOWER_SUCCESS,
    payload: data,
  };
};

export function getUserFollower() {
  return function (dispatch) {
    getFollower()
      .then((response) => {
        if (response.status === 200) {
          dispatch(getFollowerSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
