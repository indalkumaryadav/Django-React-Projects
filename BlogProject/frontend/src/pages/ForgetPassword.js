import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import NavBar from "../components/header/NavBar";
import styled from "styled-components";

const ForgetPasswordButton = styled(Button)`
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

const ForgetPassword = () => {
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
              Forget Password
            </Typography>

            <form style={{ marginTop: 10 }}>
              <TextField
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="password"
                type="email"
              />

              <ForgetPasswordButton fullWidth>
                Forget Password
              </ForgetPasswordButton>
            </form>
          </Container>
        </Paper>
      </div>
    </>
  );
};

export default ForgetPassword;
