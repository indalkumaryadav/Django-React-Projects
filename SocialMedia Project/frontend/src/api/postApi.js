import axios from "axios";

export async function fetchPost() {
  return axios
    .get(`http://127.0.0.1:8000/api/user/post/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then()
    .catch();
}

export async function createPost(formData) {
  return axios
    .post(`http://127.0.0.1:8000/api/user/post/`, formData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then()
    .catch();
}
