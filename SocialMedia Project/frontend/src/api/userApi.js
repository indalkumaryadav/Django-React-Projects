import axios from "axios";

export async function fetchUser() {
  return axios.get(`http://127.0.0.1:8000/api/account/user/`).then().catch();
}

export async function getProfile() {
  return axios
    .get(`http://127.0.0.1:8000/api/user/profile/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then()
    .catch();
}
export async function getProfileById(id) {
  return axios
    .get(`http://127.0.0.1:8000/api/user/profile/${id}/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then()
    .catch();
}
