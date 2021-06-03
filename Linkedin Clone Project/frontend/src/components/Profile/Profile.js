import {
  Grid,
  Paper,
  Container,
  Avatar,
  IconButton,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import NavBar from "../Header/NavBar";
import UserCard from "../User/UserCard";

const Profile = () => {
  return (
    <>
      <NavBar />
      <Container
        style={{
          marginTop: 30,
          width: 1100,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={9}>
            <Paper style={{ paddingBottom: 20 }}>
              <div style={{ height: 195, backgroundColor: "red" }}></div>
              <Container>
                <IconButton style={{ marginTop: "-120px", marginBottom: 0 }}>
                  <Avatar style={{ height: 180, width: 180 }} />
                </IconButton>
                <Typography variant="h4">Indal Kumar</Typography>
                {/*  */}
                <div style={{ marginTop: 20 }}>
                  <Button
                    style={{
                      textTransform: "capitalize",
                      borderRadius: 50,
                      backgroundColor: "blue",
                      width: 120,
                      color: "white",
                    }}
                  >
                    Connect
                  </Button>
                  <Button
                    style={{
                      textTransform: "capitalize",
                      borderRadius: 50,
                      width: 120,
                      marginLeft: 10,
                    }}
                  >
                    Message
                  </Button>
                </div>
              </Container>
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper style={{ width: 350 }}>
              <Container style={{ paddingTop: 10 }}>
                <Typography>People also viewed</Typography>
              </Container>
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <UserCard />
              <Divider />
              <Button fullWidth style={{ height: 45 }}>
                Show More
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
