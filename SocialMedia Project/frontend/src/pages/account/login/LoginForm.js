import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  Typography,
  IconButton,
} from "@material-ui/core";
import {
  LoginButton,
  OR,
  GoogleSignInButton,
  FacebookSignInButton,
  ForgetPassword,
  CreateAccount,
} from "./style";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Redirect, useHistory } from "react-router";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useForm } from "react-hook-form";
import { login } from "../../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoginForm = () => {
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const { register, handleSubmit, errors } = useForm();

  const handleChecked = () => setChecked(!checked);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (auth.error) {
      alert(auth.error.response.data.detail);
    }
  }, [auth.error]);
  if (auth.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
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
          <TextField
            name="password"
            type={showPassword ? "text" : "password"}
            margin="normal"
            fullWidth
            label="Password"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleShowPassword}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              ),
            }}
            inputRef={register({
              required: "password is required",
            })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControl>
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={handleChecked} />
                }
                label="Remeber me"
              />
            </FormControl>
            <ForgetPassword
              onClick={() => {
                history.push("/forget/password");
              }}
            >
              Forget Password?
            </ForgetPassword>
          </div>
          {auth.isLoading && (
            <div>
              <CircularProgress />
            </div>
          )}
          <LoginButton type="submit" fullWidth>
            Login
          </LoginButton>
        </form>
        <div
          style={{
            marginTop: 20,
          }}
        >
          <Typography variant="subtitle1">
            Not registered yet?{" "}
            <CreateAccount
              onClick={() => {
                history.push("/register");
              }}
            >
              Create an Account
            </CreateAccount>
          </Typography>
        </div>

        <OR>or</OR>
        <GoogleSignInButton fullWidth>
          <FcGoogle
            style={{
              marginRight: 20,
              fontSize: 20,
            }}
          />
          Google Sign in
        </GoogleSignInButton>
        <FacebookSignInButton fullWidth>
          <FaFacebook
            style={{
              marginRight: 20,
              fontSize: 22,
              color: "blue",
            }}
          />
          sign with facebook
        </FacebookSignInButton>
      </div>
    </>
  );
};

export default LoginForm;
