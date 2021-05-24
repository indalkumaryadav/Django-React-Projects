import * as actionTypes from "./actionTypes";
import {
  fetchPost,
  createPost,
  deletePost,
  updatePost,
} from "../../api/postApi";

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
// update post
export const updatePostSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_POST_SUCCESS,
    payload: data,
  };
};

export function updateUserPost(postId, data) {
  return function (dispatch) {
    updatePost(postId, data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(updatePostSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

// delete post
export const deletePostSuccess = (data) => {
  return {
    type: actionTypes.DELETE_POST_SUCCESS,
    payload: data,
  };
};

export function deleteUserPost(postId) {
  return function (dispatch) {
    deletePost(postId)
      .then((response) => {
        if (response.status === 200) {
          dispatch(deletePostSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
