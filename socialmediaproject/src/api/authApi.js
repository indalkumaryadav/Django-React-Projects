import axios from "axios";

export const loginUser = async () => {
  return axios
    .post(`${process.env.REACT_APP_API}token/`, {
      email: email,
      password: password,
    })
    .then()
    .catch();
};

export const createUser = async () => {
  return axios
    .post(`${process.env.REACT_APP_API}token/`, {
      email: email,
      password: password,
    })
    .then()
    .catch();
};
