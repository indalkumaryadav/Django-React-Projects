import * as actionTypes from "./actionTypes";
import { fetchPost, createPost } from "../../api/postApi";

export const getPostSuccess = (data) => {
  return {
    type: actionTypes.GET_POST,
    payload: data,
  };
};

export function loadPost() {
  return function (dispatch) {
    fetchPost()
      .then((response) => {
        if (response.status === 200) {
          dispatch(getPostSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

// create post
export const createPostStart = () => {
  return {
    type: actionTypes.CREATE_POST_START,
  };
};

export const createPostSuccess = (data) => {
  return {
    type: actionTypes.CREATE_POST_SUCCESS,
    payload: data,
  };
};

export function addPost(formData) {
  return function (dispatch) {
    dispatch(createPostStart());
    createPost(formData)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.error === false) {
            console.log(response.data);
            dispatch(createPostSuccess(response.data));
            dispatch(loadPost());
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
