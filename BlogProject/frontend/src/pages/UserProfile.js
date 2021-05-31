import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import NavBar from "../components/header/NavBar";
import { useHistory } from "react-router-dom";

const UserProfile = () => {
  const history = useHistory();

  return (
    <>
      <NavBar />
      <div style={{ height: 150, backgroundColor: "red" }}></div>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "-60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-60px",
          }}
        >
          <IconButton>
            <Avatar style={{ height: 100, width: 100 }}>I</Avatar>
          </IconButton>
        </div>
        <Paper style={{ width: 1000, marginTop: "-50px" }} elevation={10}>
          <Container
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button
              style={{
                width: 150,
                height: 40,
                backgroundColor: "#323ebe",
                color: "white",
                textTransform: "capitalize",
                marginTop: 10,
                fontWeight: "bold",
                fontSize: 16,
              }}
              onClick={() => {
                history.push("/editprofile");
              }}
            >
              Edit Profile
            </Button>
          </Container>
          <Container>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography style={{ fontSize: 30, fontWeight: "bold" }}>
                Indal Kumar Yadav
              </Typography>
            </div>
            <h1>Indal</h1>
            <h1>Indal</h1>
            <h1>Indal</h1>
            <h1>Indal</h1>
          </Container>
        </Paper>
      </Container>
    </>
  );
};

export default UserProfile;
