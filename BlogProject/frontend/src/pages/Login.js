import {
  Button,
  Checkbox,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import NavBar from "../components/header/NavBar";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const LoginButton = styled(Button)`
  margin-top: 20px;
  background-color: #1da1f2;
  color: white;
  text-transform: capitalize;
  font-size: 16px;
  height: 48px;

  &:hover {
    background-color: #4754e1;
    color: white;
  }
`;

const Login = () => {
  const history = useHistory();
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
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
            <form style={{ marginTop: 10 }}>
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="email"
                type="email"
              />
              <TextField
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="password"
                type="email"
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

              <LoginButton fullWidth>Login</LoginButton>
            </form>
          </Container>
        </Paper>
      </div>
    </>
  );
};

export default Login;
