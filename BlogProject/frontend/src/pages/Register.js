import {
  Button,
  Checkbox,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import NavBar from "../components/header/NavBar";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const RegisterButton = styled(Button)`
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

const Register = () => {
  const history = useHistory();

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
            <form style={{ marginTop: 10 }}>
              <TextField
                label="Full Name"
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="email"
                type="email"
              />
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
              <TextField
                label="Confirm Password"
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="password"
                type="email"
              />
              <RegisterButton fullWidth>Continue</RegisterButton>
            </form>
          </Container>
        </Paper>
      </div>
    </>
  );
};

export default Register;
