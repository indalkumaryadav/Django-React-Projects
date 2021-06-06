import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import NavBar from "../components/header/NavBar";
import { Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actions/authAction";
import { useForm } from "react-hook-form";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Alert, AlertTitle } from "@material-ui/lab";

const RegisterButton = styled(Button)`
  margin-top: 20px !important;
  background-color: #1da1f2 !important;
  color: white !important;
  text-transform: capitalize !important;
  font-size: 16px !important;
  height: 48px !important;

  &:hover {
    background-color: #4754e1;
    color: white;
  }
`;

const Register = () => {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowCPassword = () => setShowCPassword(!showCPassword);

  useEffect(() => {
    if (auth.token) {
      return history.push("/");
    }
  }, []);

  const onSubmit = (data) => {
    const username = data.username;
    const email = data.email;
    const password = data.password;
    const c_password = data.confirm_password;
    if (password === c_password) {
      dispatch(registerUser(username, email, password));
    } else {
      alert("password not matched!");
    }
  };

  return (
    <>
      <NavBar />
      <div
        style={{
          width: "100wh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        <Paper style={{ width: 500, padding: 20 }}>
          <Container>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", marginTop: 10 }}
            >
              Create Account
            </Typography>{" "}
            <Typography variant="subtitle2">
              Welcome to the Community
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
            {/* error */}
            {auth.error && (
              <Alert
                severity="error"
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <AlertTitle>Error</AlertTitle>
                {auth?.error} — <strong>check it out!</strong>
              </Alert>
            )}
            <form style={{ marginTop: 10 }} onSubmit={handleSubmit(onSubmit)}>
              <TextField
                name="username"
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="username"
                inputRef={register({
                  required: "username is required",
                })}
                error={Boolean(errors.username)}
                helperText={errors.username?.message}
              />
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
                type={showPassword ? "text" : "password"}
                placeholder="password"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  ),
                }}
                inputRef={register({
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "minimum password length should be 6",
                  },
                })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
              />
              <TextField
                name="confirm_password"
                label="Confirm Password"
                variant="outlined"
                margin="normal"
                fullWidth
                type={showCPassword ? "text" : "password"}
                placeholder="password"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleShowCPassword}>
                      {showCPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  ),
                }}
                inputRef={register({
                  required: "confirm password is required",
                })}
                error={Boolean(errors?.confirm_password)}
                helperText={errors?.confirm_password?.message}
              />
              <RegisterButton type="submit" fullWidth>
                {auth.isLoading ? (
                  <CircularProgress style={{ color: "red" }} />
                ) : (
                  "Continue"
                )}
              </RegisterButton>
            </form>
          </Container>
        </Paper>
      </div>
    </>
  );
};

export default Register;
