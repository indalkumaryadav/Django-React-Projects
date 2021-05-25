import * as actionTypes from './actionTypes';
import { fetchUser, getProfile, getUserById, updateProfile, updateUser } from '../../api/userApi';

export const getUserSuccess = (data) => {
  return {
    type: actionTypes.GET_USER,
    payload: data,
  };
};
export function loadUser() {
  return function (dispatch) {
    fetchUser()
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
    type: actionTypes.PROFILE_SUCCESS,
    payload: data,
  };
};

export function loadProfile() {
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

// get profile by id
export const getProfileSuccessById = (data) => {
  return {
    type: actionTypes.GET_PROFILE_SUCCESS,
    payload: data,
  };
};

export function getUserProfileById(id) {
  return function (dispatch) {
    getUserById(id)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getProfileSuccessById(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//update profile
export const updateProfileSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_PROFILE_SUCCESS,
    payload: data,
  };
};

export function updateUserProfile(userId, data) {
  return function (dispatch) {
    updateProfile(userId, data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(updateProfileSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//update user
export const updateSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_USER_SUCCESS,
    payload: data,
  };
};

export function updateUserData(userId, data) {
  return function (dispatch) {
    updateUser(userId, data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(updateSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
