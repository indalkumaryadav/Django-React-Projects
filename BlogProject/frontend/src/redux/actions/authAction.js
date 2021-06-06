import * as actionTypes from "./actionTypes";
import { createUser, userLogin } from "../../api/authApi";

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_START,
  };
};

export const loginSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data,
  };
};
export const loginFail = (error) => {
  return {
    type: actionTypes.LOGIN_FAIL,
    payload: error,
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    userLogin(email, password)
      .then((response) => {
        if (response.status === 200) {
          if (response.statusText === "OK") {
            localStorage.setItem("token", response.data.access);
            dispatch(loginSuccess(response.data));
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          dispatch(loginFail(error));
        }
      });
  };
};

// logout

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
};

// register

export const registerStart = () => {
  return {
    type: actionTypes.REGISTER_START,
  };
};

export const registerSuccess = (data) => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
    payload: data,
  };
};
export const registerFail = (error) => {
  return {
    type: actionTypes.REGISTER_FAIL,
    payload: error,
  };
};

export const registerUser = (username, email, password) => {
  return (dispatch) => {
    dispatch(registerStart());
    createUser(username, email, password)
      .then((response) => {
        if (response.status === 200) {
          if (response.statusText === "OK") {
            if (response.data.message === true) {
              dispatch(registerSuccess(response.data.data));
              window.location.replace("/login");
            } else {
              if (response.data.data.email[0]) {
                dispatch(registerFail(response.data.data.email[0]));
              }
              if (response.data.data.username[0]) {
                dispatch(registerFail(response.data.data.username[0]));
              }
            }
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          dispatch(registerFail(error));
        }
      });
  };
};
