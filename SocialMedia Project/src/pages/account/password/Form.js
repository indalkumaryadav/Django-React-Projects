import React, { useEffect } from "react";
import { TextField, Typography } from "@material-ui/core";
import { SubmitButton, LoginAccount } from "./style";
import { useHistory } from "react-router";

import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoginForm = () => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const auth = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    // const email = data.email;
  };
  console.log(auth);
  useEffect(() => {
    if (auth.error) {
      alert(auth.error);
    }
  }, [auth.error]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="email"
          margin="normal"
          fullWidth
          label="Email"
          variant="outlined"
          inputRef={register({
            required: "email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></div>
        {auth.isLoading && (
          <div>
            <CircularProgress />
          </div>
        )}
        <SubmitButton type="submit" fullWidth>
          Forget Password
        </SubmitButton>
      </form>
      <div
        style={{
          marginTop: 20,
        }}
      >
        <Typography variant="subtitle1">
          Already have an Account?{" "}
          <LoginAccount
            onClick={() => {
              history.push("/");
            }}
          >
            Login
          </LoginAccount>
        </Typography>
      </div>
    </div>
  );
};

export default LoginForm;
