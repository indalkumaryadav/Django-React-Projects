import {
  Avatar,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import NavBar from "../components/header/NavBar";

const EditProfile = () => {
  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item md={6} style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Paper style={{ paddingBottom: 20, marginTop: 10, marginBottom: 20 }}>
            <Container>
              <Typography style={{ marginTop: 5 }} variant="h5">
                Edit Profile
              </Typography>
              <form>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <IconButton>
                    <Avatar
                      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                      style={{ width: 150, height: 150 }}
                    />
                  </IconButton>
                </div>

                <TextField
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  label="Email"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  label="Email"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  label="Email"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  label="Email"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  label="Email"
                />

                <Button
                  style={{
                    width: 200,
                    height: 45,
                    marginTop: 15,
                    marginLeft: 4,
                    backgroundColor: "#323ebe",
                    color: "white",
                    textTransform: "capitalize",
                    fontSize: 16,
                  }}
                >
                  Update
                </Button>
              </form>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default EditProfile;
