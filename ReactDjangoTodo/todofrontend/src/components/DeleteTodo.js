import React from "react";
import axios from "axios";
import { SERVER } from "../server";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
function DeleteTodo() {
  let history = useHistory();
  const { id } = useParams();

  function deleteTodo(id) {
    axios.delete(SERVER + id);
    history.push("/");
  }
  return (
    <div>
      <Button onClick={() => deleteTodo(id)}>Delete</Button>
    </div>
  );
}

export default DeleteTodo;
