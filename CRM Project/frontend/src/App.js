import React from "react";
import Home from "./pages/HomePage/Home";
import { Switch, Route } from "react-router-dom";
import PageNotFound from "./components/error/PageNotFound";
import Register from "./pages/account/Register";
import Login from "./pages/account/Login";
import PrivateRoute from "./PrivateRoutes";
import NabBar from "./components/header/NavBar";

const App = () => {
  return (
    <>
      <NabBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
