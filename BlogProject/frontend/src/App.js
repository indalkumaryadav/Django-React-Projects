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

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/postTitle" component={BlogDetail} />
        <Route exact path="/username" component={UserProfile} />
        <Route exact path="/create" component={CreateBlog} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
