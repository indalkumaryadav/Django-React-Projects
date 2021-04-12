import * as actionType from "./actionType";
import axios from "axios";
import { LOGIN, API } from "../../server";
export const authStart = () => {
  return {
    type: actionType.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionType.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionType.AUTH_FAIL,
    error: error,
  };
};

export const authLogin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post(`${LOGIN}`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const token = response.data["access"];
          localStorage.setItem("token", token);
          dispatch(authSuccess(token));
          window.location.replace("/home");
        }
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: actionType.AUTH_LOGOUT,
  };
};

export const createUser = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post(`${API}account/user/create/`, {
        email: email,
        password: password,
      })
      .then((response) => {
        // const token = response.data["access"];
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  };
};
