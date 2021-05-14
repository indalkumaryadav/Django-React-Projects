import axios from "axios";

export const loginUser = async (email, password) => {
  return axios
    .post(`http://127.0.0.1:8000/api/token/`, {
      email: email,
      password: password,
    })
    .then()
    .catch();
};

export const createUser = async (email, password) => {
  return axios
    .post(`${process.env.REACT_APP_API}token/`, {
      email: email,
      password: password,
    })
    .then()
    .catch();
};
