import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Button,
  Typography,
  TextField,
  Divider,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../store/actions/action";
import { useSelector, useDispatch } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Home = () => {
  const todos = useSelector((store) => store.todo.todos);
  const [todo, setTodo] = useState("");
  const [updateVlaue, setUpdateVlaue] = useState("");
  const [id, setId] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleChangeUpdate = (e) => {
    setUpdateVlaue(e.target.value);
  };

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  const popUpDialog = () => {
    return (
      <Dialog>
        <DialogTitle>Indal kumar</DialogTitle>
        <DialogContent>
          <h1>Content Dialog</h1>
        </DialogContent>
      </Dialog>
    );
  };
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <Typography align="center" variant="h5">
            Todo
          </Typography>
          <Divider />
          <div style={{ marginTop: 20 }}>
            <TextField
              placeholder="add todo.."
              label="add todo"
              value={todo}
              onChange={handleChange}
            />
            <Button
              margin="normal"
              varinat="contained"
              size="large"
              style={{ backgroundColor: "blue", color: "white" }}
              onClick={() => {
                dispatch(
                  createTodo({
                    title: todo,
                  })
                );
                setTodo("");
              }}
            >
              Add Todo
            </Button>
          </div>
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 500 }}>
          <List>
            {todos.map((item) => {
              return (
                <ListItem key={item.id} style={{ marginTop: 2 }}>
                  <ListItemText>{item.title}</ListItemText>
                  <ListItemIcon>
                    <IconButton
                      onClick={() => {
                        setUpdateVlaue(item.title);
                        setId(item.id);
                        handleClickOpen();
                      }}
                    >
                      <EditIcon style={{ color: "green" }} />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemIcon>
                    <IconButton
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this todo?"
                          )
                        ) {
                          dispatch(deleteTodo(item.id));
                          window.location.reload();
                        }
                      }}
                    >
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </ListItemIcon>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Container>

      {/* dialog */}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Update Todo</DialogTitle>
          <DialogContent>
            <TextField
              label="Edit Todo"
              margin="normal"
              value={updateVlaue}
              variant="outlined"
              onChange={handleChangeUpdate}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              color="primary"
              style={{ backgroundColor: "red", color: "white" }}
            >
              Cencel
            </Button>
            <Button
              color="primary"
              autoFocus
              style={{ backgroundColor: "blue", color: "white" }}
              onClick={() => {
                dispatch(
                  updateTodo({
                    id: id,
                    title: updateVlaue,
                  })
                );
                handleClose();
              }}
            >
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Home;
