import axios from "axios";

export const getStory = async (data) => {
  return axios
    .get(
      `http://127.0.0.1:8000/api/user/stories/`,

      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
    .then()
    .catch();
};

export const createStory = async (formData) => {
  return axios
    .post(`http://127.0.0.1:8000/api/user/stories/`, formData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then()
    .catch();
};
