import axios from "axios";

export const userLogin = async (email, password) => {
  return axios
    .post(`http://127.0.0.1:8000/api/token/`, {
      email: email,
      password: password,
    })
    .then()
    .catch();
};

export const createUser = async (username, email, password) => {
  return axios
    .post(`http://127.0.0.1:8000/api/account/user/`, {
      username,
      email,
      password,
    })
    .then()
    .catch();
};
