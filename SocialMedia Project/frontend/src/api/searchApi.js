import axios from "axios";

export const searchUser = async (q) => {
  return axios
    .get(`http://127.0.0.1:8000/api/users/${q}/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then()
    .catch();
};
