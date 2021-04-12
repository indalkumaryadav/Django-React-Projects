import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { authLogin, authSuccess } from "../store/actions/action";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);
  const token = useSelector((state) => state.auth.token);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    dispatch(authLogin(email, password));
    const token = localStorage.getItem("token");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      return history.push("/home");
    }
  }, []);

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="col-5">
        <h3>Login Here.</h3>
        <form style={{ marginTop: 20 }} onSubmit={handleSubmit(onSubmit)}>
          {error && <p>{error.response?.data?.detail}</p>}
          <div>
            <label class="form-label">Email address</label>
            <input
              name="email"
              type="email"
              class="form-control"
              ref={register}
            />
          </div>
          <div>
            <label class="form-label">Password</label>
            <input
              name="password"
              type="password"
              class="form-control"
              ref={register}
            />
          </div>
          {loading && (
            <div class="spinner-border text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          )}

          <div style={{ marginTop: 10 }}>
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
