import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/home" component={Home} exact />
    </Switch>
  );
}

export default App;
