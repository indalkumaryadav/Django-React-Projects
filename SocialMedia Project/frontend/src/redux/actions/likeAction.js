import * as actionTypes from "./actionTypes";
import { getLike, addLike, deleteLike } from "../../api/likeApi";

export const getLikeSuccess = (data) => {
  return {
    type: actionTypes.GET_LIKE_SUCCESS,
    payload: data,
  };
};

export function getLikeData(id) {
  return function (dispatch) {
    getLike(id)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getLikeSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

// addLike

export const addLikeSuccess = (data) => {
  return {
    type: actionTypes.ADD_LIKE_SUCCESS,
    payload: data,
  };
};

export function addPostLike(data) {
  return function (dispatch) {
    addLike(data)
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

// delete like
export const deleteLikeSuccess = (data) => {
  return {
    type: actionTypes.DELETE_LIKE_SUCCESS,
    payload: data,
  };
};

export function removeLike(data) {
  return function (dispatch) {
    deleteLike(data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          dispatch(deleteLikeSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
