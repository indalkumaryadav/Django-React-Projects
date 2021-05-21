import * as actionTypes from "./actionTypes";
import { getStory, createStory } from "../../api/storyApi";

export const getStorySuccess = (data) => {
  return {
    type: actionTypes.GET_STORY_SUCCESS,
    payload: data,
  };
};

export function getUserStory() {
  return function (dispatch) {
    getStory()
      .then((response) => {
        if (response.status === 200) {
          dispatch(getStorySuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

// create story
export const createStorySuccess = (data) => {
  return {
    type: actionTypes.ADD_STORY_SUCCESS,
    payload: data,
  };
};

export function createUserStory(data) {
  return function (dispatch) {
    createStory(data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(createStorySuccess(response.data));
          dispatch(getUserStory());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
