import React, { useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import NavBar from "../components/NavBar";
const Home = () => {
  let history = useHistory();
  useEffect(() => {
    if (reactLocalStorage.get("token")) {
      history.push("/");
    } else {
      history.push("/login");
    }
  }, []);
  return (
    <>
      <NavBar />
      <h1>Home page</h1>
    </>
  );
};

export default Home;
