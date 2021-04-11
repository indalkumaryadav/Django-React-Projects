import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default App;
