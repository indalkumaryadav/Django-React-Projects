import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER } from "../server";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Container, Paper, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Todo() {
  const [todo, setTodo] = useState([]);
  function getTodo() {
    axios.get(SERVER).then((data) => setTodo(data.data));
  }
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <Container>
      <Box>
        <Paper>
          {todo.map((item) => {
            return (
              <div style={{ display: "flex", marginTop: 8 }}>
                <ListItem button key={item.id}>
                  <ListItemText>{item.title}</ListItemText>
                </ListItem>
                <Link to={`/edit/${item.id}`}>
                  <Button>Edit</Button>
                </Link>

                <Link to={`/delete/${item.id}`}>
                  <Button style={{ backgroundColor: "red", color: "white" }}>
                    Delete
                  </Button>
                </Link>
              </div>
            );
          })}
        </Paper>
      </Box>
    </Container>
  );
}
export default Todo;
