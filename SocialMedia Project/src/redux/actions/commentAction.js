import * as actionTypes from "./actionTypes";
import { addComment } from "../../api/commentApi";

// add Comment

export const addLikeSuccess = (data) => {
  return {
    type: actionTypes.ADD_COMMENT_SUCCESS,
    payload: data,
  };
};

export function addPostComment(id, title) {
  return function (dispatch) {
    addComment(id, title)
      .then((response) => {
        if (response.status === 200) {
          dispatch(addLikeSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
