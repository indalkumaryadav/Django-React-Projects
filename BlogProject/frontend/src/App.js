import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./components/PageNotFound";
import GlobalStyle from "./style/globalStyle";
import BlogDetail from "./pages/BlogDetail";
import UserProfile from "./pages/UserProfile";
import CreateBlog from "./pages/CreateBlog";
import EditProfile from "./pages/EditProfile";
import ForgetPassword from "./pages/ForgetPassword";
import PrivateRoute from "./utilities/PrivateRoute";
import GridLayout from "./components/GridLayout";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/create" component={CreateBlog} />
        <PrivateRoute exact path="/editprofile" component={EditProfile} />
        <Route exact path="/forget-password" component={ForgetPassword} />
        <Route exact path="/gird" component={GridLayout} />

        <Route exact path="/:username" component={UserProfile} />
        <Route exact path="/:username/:id" component={BlogDetail} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
