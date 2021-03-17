import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";

function App() {
  return (
    <Switch>
      <PrivateRoute path="/" component={Login} exact />
      <PrivateRoute path="/home" component={Home} exact />
    </Switch>
  );
}

export default App;
