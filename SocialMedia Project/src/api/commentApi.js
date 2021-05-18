import axios from "axios";

export const addComment = async (id, title) => {
  return axios
    .post(
      `http://127.0.0.1:8000/api/comment/`,
      {
        id: id,
        title: title,
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
