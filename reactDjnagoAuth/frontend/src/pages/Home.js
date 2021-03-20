import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";

const Home = () => {
  let history = useHistory();
  useEffect(() => {
    if (reactLocalStorage.get("token")) {
      history.push("/home");
    }
  }, []);
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
