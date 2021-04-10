import React from "react";
import { Switch, Route } from "react-router-dom";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import DeleteTodo from "./components/DeleteTodo";
import EditTodo from "./components/EditTodo";
import Home from "./pages/Home";
function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="add/" component={AddTodo} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/delete/:id" component={DeleteTodo} />
    </Switch>
  );
}

export default App;
