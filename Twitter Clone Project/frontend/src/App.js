import React from "react";
import { Switch, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Home from "./pages/Home/Home";
import Profile from "./pages/Account/Profile";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/username" component={Profile} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
