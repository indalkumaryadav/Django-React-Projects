import axios from "axios";

export const getLike = async (id) => {
  return axios
    .get(`http://127.0.0.1:8000/api/post/likes/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then()
    .catch();
};

export const addLike = async (data) => {
  return axios
    .post(
      `http://127.0.0.1:8000/api/post/likes/`,
      {
        id: data,
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

export const deleteLike = async (data) => {
  return axios
    .delete(`http://127.0.0.1:8000/api/post/likes/${data}/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then()
    .catch();
};
