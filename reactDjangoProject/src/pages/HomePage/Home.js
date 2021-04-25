import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadUser } from "../../redux/actions/authAction";
import { Redirect } from "react-router";

const Home = ({ loadUser, users, token, ...props }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    loadUser();
  }, []);

  const handleInputChange = (event) => {
    const email = event.target.email;
    const password = event.target.password;
    console.log(email);
    console.log(password);
  };
  const handleSubmit = (event) => {};

  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    token: state.user.token,
  };
};
const mapDispatchToProps = {
  loadUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
