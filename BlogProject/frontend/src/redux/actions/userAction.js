import * as actionTypes from "./actionTypes";
import { getUser, getProfile } from "../../api/userApi";

export const getUserSuccess = (data) => {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    payload: data,
  };
};

export function getUserData(username) {
  return function (dispatch) {
    getUser(username)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getUserSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

// profile
export const getProfileSuccess = (data) => {
  return {
    type: actionTypes.GET_PROFILE_SUCCESS,
    payload: data,
  };
};

export function getProfileData() {
  return function (dispatch) {
    getProfile()
      .then((response) => {
        if (response.status === 200) {
          dispatch(getProfileSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
