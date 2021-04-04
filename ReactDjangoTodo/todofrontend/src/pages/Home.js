import React from "react";
import Todo from "../components/Todo";
import AddTodo from "../components/AddTodo";
import { Container } from "@material-ui/core";
function Home() {
  return (
    <Container>
      <AddTodo />
      <Todo />
    </Container>
  );
}
export default Home;
