import * as actionTypes from "./actionTypes";
import authApi from "../../api/authApi";

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

export const login = () => {
  return (dispatch) => {
    dispatch(loginStart());
    authApi
      .loginUser()
      .then((data) => {
        console.log(data);
        dispatch(loginSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFail(error));
      });
  };
};
