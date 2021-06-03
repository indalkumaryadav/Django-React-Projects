import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forget-password" component={ForgetPassword} />
        <Route exact path="/username" component={Profile} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
