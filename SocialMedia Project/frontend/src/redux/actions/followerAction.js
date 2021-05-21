import * as actionTypes from "./actionTypes";
import { getFollower } from "../../api/followerApi";

// add Comment
export const getFollowerSuccess = (data) => {
  return {
    type: actionTypes.GET_FOLLOWING_SUCCESS,
    payload: data,
  };
};

export function getFollower(id, title) {
  return function (dispatch) {
    addComment(id, title)
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
