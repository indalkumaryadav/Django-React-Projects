import * as actionTypes from "./actionTypes";
import { loginUser } from "../../api/authApi";

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
    loginUser(email, password)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("access", response.data.access);
          localStorage.setItem("refresh", response.data.refresh);
          dispatch(loginSuccess(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFail(error));
      });
  };
};
