import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/account/login/Login";
import Register from "./pages/account/register/Register";
import ForgetPassword from "./pages/account/password/ForgetPassword";
import PageNotFound from "./component/PageNotFound";
import GlobalStyle from "./style/globalStyle";
import Home from "./pages/home/Home";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forget/password" component={ForgetPassword} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
