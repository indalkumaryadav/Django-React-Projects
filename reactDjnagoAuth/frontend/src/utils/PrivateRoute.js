import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (reactLocalStorage.get("token")) {
          return <Component />;
        } else {
          return <Redirect to="/user/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
