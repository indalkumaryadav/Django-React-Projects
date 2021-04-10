import axios from "axios";
import { SERVER } from "../../server";

export const getTodo = () => async (dispatch) => {
  const response = await axios.get(`${SERVER}`);
  dispatch({
    type: "GET_TODO",
    payload: response.data,
  });
};

export const createTodo = (data) => async (dispatch) => {
  const response = await axios.post(`${SERVER}`, data);
  dispatch({
    type: "ADD_TODO",
    payload: response.data,
  });
};

export const updateTodo = (data) => async (dispatch) => {
  const response = await axios.put(`${SERVER}${data.id}/`, data);
  dispatch({
    type: "UPDATE_TODO",
    payload: response.data,
  });
};

export const deleteTodo = (id) => async (dispatch) => {
  const response = await axios.delete(`${SERVER}${id}/`);
  dispatch({
    type: "DELETE_TODO",
    payload: response.data,
  });
};
