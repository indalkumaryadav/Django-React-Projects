import React, { Component } from "react";
import NavBar from "./components/Header/NavBar";
import { Switch, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Account/Login";
import Register from "./pages/Account/Register";
import PrivateRoute from "./PrivateRoute";
import GlobalStyle from "./style/GlobalStyle";
import Search from "./pages/SearchPage/Search";
import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/search/:q" component={Search} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
