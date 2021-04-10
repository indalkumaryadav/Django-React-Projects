import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useForm } from "react-hook-form";
import { SERVER } from "../server";
import { useHistory, useParams, Redirect } from "react-router-dom";
function EditTodo() {
  let history = useHistory();
  const [todo, setTodo] = useState({
    title: "",
  });
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  function onsubmit(data) {
    axios
      .put(`${SERVER + id}`, data)
      .then((data) => console.log("Successfully Updated!"));
    history.push("/");
  }

  function getTodo(id) {
    axios.get(SERVER + id).then((data) => setTodo(data.data));
  }
  useEffect(() => {
    getTodo(id);
  }, []);
  const { title } = todo;
  console.log(title);
  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <Container>
      <Typography variant="h3" align="center">
        Todo
      </Typography>
      <Paper style={{ padding: 16 }}>
        <form style={{ display: "flex" }} onSubmit={handleSubmit(onsubmit)}>
          <TextField
            fullWidth
            label="Edit Todo"
            name="title"
            defaultValue={title}
            inputRef={register}
          />
          <Button
            type="submit"
            color="secondary"
            style={{ backgroundColor: "purple", padding: 8 }}
          >
            Update
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
export default EditTodo;
