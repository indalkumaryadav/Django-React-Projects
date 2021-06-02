import axios from "axios";

export const loginUser = (email, password) => {
  return axios
    .post(`${process.env.REACT_APP_API}token/`, {
      email: email,
      password: password,
    })
    .then()
    .catch();
};

export async function fetchUser() {
  return axios.get(`${process.env.REACT_APP_API}account/user/`).then().catch();
}

export async function createUser() {
  return axios.post(`${process.env.REACT_APP_API}`).then().catch();
}

function updateUser(user_id) {
  return axios
    .put(`${process.env.REACT_APP_API}/account/${user_id}`)
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error));
}

function deleteUser(user_id) {
  return axios
    .delete(`${process.env.REACT_APP_API}/account/${user_id}`)
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error));
}
