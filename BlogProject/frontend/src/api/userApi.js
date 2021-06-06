import axios from "axios";

export async function getUser(username) {
  return axios
    .get(`http://127.0.0.1:8000/api/account/user/${username}/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then()
    .catch();
}

export async function updateUser(userId, data) {
  return axios
    .patch(`http://127.0.0.1:8000/api/account/user/${userId}/`, data)
    .then()
    .catch();
}

// user profile
export async function getProfile() {
  return axios
    .get(`http://127.0.0.1:8000/api/account/profile/`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then()
    .catch();
}

export async function updateProfile(userId, data) {
  return axios
    .patch(`http://127.0.0.1:8000/api/user/profile/${userId}/`, data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then()
    .catch();
}
