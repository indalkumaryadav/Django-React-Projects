import React, { useState, useEffect } from "react";
import GoogleFontLoader from "react-google-font-loader";
import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/plugins/animate-css/animate.css";
import "adminbsb-materialdesign/css/style.css";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";

const Login = () => {
  let history = useHistory();
  useEffect(() => {
    if (reactLocalStorage.get("token")) {
      history.push("/home");
    }
  }, []);
  document.body.className = "signup-page";
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, 700],
          },
        ]}
        subsets={["latin", "cyrillic-ext"]}
      />
      <GoogleFontLoader
        fonts={[
          {
            font: "Material+Icons",
          },
        ]}
      />
      <div class="signup-box">
        <div class="logo">
          <a href="javascript:void(0);">Register</a>
        </div>
        <div class="card">
          <div class="body">
            <form id="sign_up" method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div class="msg">Register a new user</div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="material-icons">person</i>
                </span>
                <div class="form-line">
                  <input
                    type="text"
                    class="form-control"
                    name="first_name"
                    placeholder="First Name"
                    required
                    autofocus
                    ref={register}
                  />
                </div>
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="material-icons">email</i>
                </span>
                <div class="form-line">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Email Address"
                    required
                    ref={register}
                  />
                </div>
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="material-icons">lock</i>
                </span>
                <div class="form-line">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    minlength="6"
                    placeholder="Password"
                    required
                    ref={register}
                  />
                </div>
              </div>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="material-icons">lock</i>
                </span>
                <div class="form-line">
                  <input
                    type="password"
                    class="form-control"
                    name="confirm"
                    minlength="6"
                    placeholder="Confirm Password"
                    required
                    ref={register}
                  />
                </div>
              </div>
              <div class="form-group">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  class="filled-in chk-col-pink"
                />
                <label for="terms">
                  I read and agree to the{" "}
                  <a href="javascript:void(0);">terms of usage</a>.
                </label>
              </div>

              <button
                class="btn btn-block btn-lg bg-pink waves-effect"
                type="submit"
              >
                SIGN UP
              </button>

              <div class="m-t-25 m-b--5 align-center">
                <Link to="/login">You already have an account?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
