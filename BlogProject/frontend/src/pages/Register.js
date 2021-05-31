import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import NavBar from "../components/header/NavBar";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <>
      <NavBar />
      <div
        style={{
          height: "100vh",
          width: "100wh",
          backgroundColor: "#022e57",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper style={{ width: 400, padding: 20 }}>
          <Container>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", marginTop: 10 }}
            >
              Create Account
            </Typography>
            <form style={{ marginTop: 10 }}>
              <TextField
                label="Full Name"
                variant="outlined"
                margin="normal"
                fullWidth
                placeholder="email"
                type="email"
              />{" "}
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
                <Typography
                  style={{
                    cursor: "pointer",
                  }}
                >
                  ForgetPassword?
                </Typography>
                <Typography
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  Login
                </Typography>
              </div>
              <Button
                style={{
                  width: 300,
                  height: 40,
                  marginTop: 20,
                  backgroundColor: "red",
                  color: "white",
                  textTransform: "capitalize",
                  fontSize: 16,
                }}
              >
                Register
              </Button>
            </form>
          </Container>
        </Paper>
      </div>
    </>
  );
};

export default Register;
