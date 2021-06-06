import {
  Button,
  Checkbox,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NavBar from "../components/header/NavBar";
import { Redirect, useHistory } from "react-router-dom";
import { LoginButton } from "./style";
import { useForm } from "react-hook-form";
import { login } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = () => {
  useEffect(() => {
    if (auth.token) {
      return history.push("/");
    }
  }, []);
  const history = useHistory();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);
  const { register, handleSubmit, errors } = useForm();
  const auth = useSelector((state) => state.auth);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    dispatch(login(email, password));
  };

  if (auth.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <NavBar />
      <div
        style={{
          width: "100wh",
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper style={{ width: 500, padding: 20 }}>
          <Container>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", marginTop: 10 }}
            >
              Login to continue
            </Typography>
            {/* google */}
            <Button
              margin="normal"
              fullWidth
              style={{
                border: "1px solid lightGrey",
                marginTop: 10,
                height: 48,
                textTransform: "capitalize",
                fontSize: 16,
                color: "black",
              }}
            >
              Google
            </Button>
            {/* github */}
            <Button
              margin="normal"
              fullWidth
              style={{
                backgroundColor: "#24292e",
                marginTop: 10,
                height: 48,
                textTransform: "capitalize",
                fontSize: 16,
                color: "white",
              }}
            >
              GitHub
            </Button>

            {auth.error && (
              <Alert
                severity="error"
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <AlertTitle>Error</AlertTitle>
                {auth?.error?.response?.data?.detail} —{" "}
                <strong>check it out!</strong>
              </Alert>
            )}
            <form style={{ marginTop: 10 }} onSubmit={handleSubmit(onSubmit)}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="email"
                type="email"
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
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="password"
                type="password"
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
                  color: "blue",
                  marginTop: 8,
                }}
              >
                <div>
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                  Remember me
                </div>
                <Typography
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    history.push("/forget-password");
                  }}
                >
                  ForgetPassword?
                </Typography>
              </div>

              <LoginButton fullWidth type="submit">
                {auth.isLoading ? (
                  <CircularProgress style={{ color: "red" }} />
                ) : (
                  "Login"
                )}
              </LoginButton>
            </form>
          </Container>
        </Paper>
      </div>
    </>
  );
};

export default Login;
