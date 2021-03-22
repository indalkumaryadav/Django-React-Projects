import React, { Component, useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { Redirect, useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API } from "../config/server";

const UserLogin = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`${API}token/`, data)
      .then((response) => {
        if (response.status === 200) {
          reactLocalStorage.set("token", response.data.access);
          history.push("/");
        }
      })
      .then((error) => {
        console.log(error);
      });
  };
  function isLogin() {
    if (reactLocalStorage.get("token")) {
      history.push("/");
    }
  }

  useEffect(() => {
    isLogin();
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <input type="email" name="email" placeholder="email" ref={register} />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          ref={register}
        />
        <br />
        <br />
        <button type="submit">Login</button>
        <br />
        <br />
        <p>
          Don't have an account? <Link to="/user/register">register here</Link>
        </p>
      </form>
    </div>
  );
};

export default UserLogin;
