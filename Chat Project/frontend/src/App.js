import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";

const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default App;
