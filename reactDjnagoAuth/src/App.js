import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import UserLogin from "./pages/UserLogin";
import ForgetPassword from "./pages/ForgetPassword";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path="/user/login" component={UserLogin} />
      <Route exact path="/user/register" component={SignUp} />
      <Route exact path="/forget/password" component={ForgetPassword} />
    </Switch>
  );
}

export default App;
