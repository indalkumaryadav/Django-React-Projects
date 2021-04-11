import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../store/actions/action";
import { useHistory } from "react-router-dom";

const Register = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    dispatch(createUser(email, password));
    history.push("/");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      return history.push("/");
    }
  }, []);
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="col-5">
        <h3>Register Here.</h3>
        <form style={{ marginTop: 20 }} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-label">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              ref={register}
            />
          </div>
          <div>
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              ref={register}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
