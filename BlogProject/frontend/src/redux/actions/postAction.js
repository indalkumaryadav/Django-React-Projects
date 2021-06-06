import * as actionTypes from "./actionTypes";
import { fetchPost, getSinglePost } from "../../api/blogApi";

// get all post
export const getPostStart = () => {
  return {
    type: actionTypes.GET_POST_START,
  };
};
export const getPostSuccess = (data) => {
  return {
    type: actionTypes.GET_POST_SUCCESS,
    payload: data,
  };
};
export const getPostFail = (error) => {
  return {
    type: actionTypes.GET_POST_FAIL,
    payload: error,
  };
};

export function loadPost() {
  return function (dispatch) {
    dispatch(getPostStart());
    fetchPost()
      .then((response) => {
        if (response.status === 200) {
          dispatch(getPostSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(getPostFail(error));
      });
  };
}

// get single post
export const getSinglePostSuccess = (data) => {
  return {
    type: actionTypes.GET_SINGLE_POST_SUCCESS,
    payload: data,
  };
};

export function getSinglePostData(id) {
  return function (dispatch) {
    getSinglePost(id)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getSinglePostSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
