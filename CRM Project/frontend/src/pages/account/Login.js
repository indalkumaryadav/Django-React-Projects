import React, { useEffect } from "react";
import { connect } from "react-redux";
import { authLogin } from "../../redux/actions/authAction";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ authLogin, token, error, isAuthenticated, isLoading }) => {
  const loginError = error?.response?.data?.detail;
  const { register, handleSubmit } = useForm();
  console.log(isLoading);
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    authLogin(email, password).then(() => {});
  };

  useEffect(() => {
    if (loginError) {
      alert(loginError);
    }
  });
  if (isAuthenticated) {
    alert("successfully login");
    return <Redirect to="/" />;
  }
  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        Email:-
        <input type="text" name="email" ref={register} />
        <br />
        Password:-
        <input type="text" name="password" ref={register} />
        <button type="submit">Login</button>
        <br />
        {isLoading && <h2>Loading...</h2>}
      </form>
      <ToastContainer />
    </div>
  );
};

Login.propTypes = {
  authLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    token: state.user.token,
    error: state.user.error,
    isAuthenticated: state.user.isAuthenticated,
    isLoading: state.user.isLoading,
  };
}

const mapDispatchToProps = {
  authLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
