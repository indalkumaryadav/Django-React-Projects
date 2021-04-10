import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import axios from "axios";
import { SERVER } from "../config/server";

const SingUp = () => {
  let history = useHistory();
  useEffect(() => {}, []);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`${SERVER}account/user/register/`, data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert(response.data.message);
          history.push("/user/login");
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
        <h1>Register User</h1>
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          ref={register}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          minlength="6"
          placeholder="Password"
          required
          ref={register}
        />
        <br />
        <br />
        <button type="submit">Register</button>
        <br />
        <br />
        <p>
          Already have an account? <Link to="/user/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default SingUp;
