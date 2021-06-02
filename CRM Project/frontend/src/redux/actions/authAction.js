import * as actionTypes from "./actionTypes";
import * as apiUser from "../../api/apiUser";
import { beginApiCall, apiCallError } from "./apiStatus";

export const loadUserSuccess = (user) => {
  return {
    type: actionTypes.GET_USER,
    payload: user,
  };
};
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
export const loginSuccess = (token) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: token,
  };
};
export const loginFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: error,
  };
};

export function loadUser() {
  return function (dispatch) {
    return apiUser
      .fetchUser()
      .then((users) => {
        dispatch(loadUserSuccess(users));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const authLogin = (email, password) => {
  return async (dispatch) => {
    dispatch(authStart());
    return apiUser
      .loginUser(email, password)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.access) {
            const access = res.data.access;
            const refresh = res.data.refresh;
            localStorage.setItem("access", access);
            localStorage.setItem("refresh", refresh);
            dispatch(loginSuccess(access));
          }
        }
      })
      .catch((error) => {
        dispatch(loginFail(error));
      });
  };
};
