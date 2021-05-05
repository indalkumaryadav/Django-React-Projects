import React from "react";
import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
