import axios from "axios";

export const getFollower = async () => {
  return axios
    .get(`http://127.0.0.1:8000/api/user/followers/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then()
    .catch();
};
