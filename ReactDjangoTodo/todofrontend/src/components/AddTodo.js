import React from "react";
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
function AddTodo() {
  const { register, handleSubmit } = useForm();
  function onsubmit(data) {
    axios
      .post(SERVER, data)
      .then((data) => console.log("Successfully Created!"));
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
            label="Add Todo"
            name="title"
            inputRef={register}
          />
          <Button
            type="submit"
            color="secondary"
            style={{ backgroundColor: "purple", padding: 8 }}
          >
            Add
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
export default AddTodo;
