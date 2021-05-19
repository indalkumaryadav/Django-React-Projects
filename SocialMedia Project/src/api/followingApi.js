import axios from "axios";

export const getFollowing = async () => {
  return axios
    .get(`http://127.0.0.1:8000/api/user/following/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then()
    .catch();
};

export const addFollowing = async (userId) => {
  return axios
    .post(
      `http://127.0.0.1:8000/api/user/following/`,
      {
        id: userId,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
    .then()
    .catch();
};
