import axios from "axios";

export const getPost = async () => {
  return axios
    .post(`${process.env.REACT_APP_API}token/`, {
      email: email,
      password: password,
    })
    .then()
    .catch();
};
