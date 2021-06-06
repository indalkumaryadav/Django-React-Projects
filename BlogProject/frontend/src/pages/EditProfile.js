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
import { useEffect } from "react";
import NavBar from "../components/header/NavBar";
import { getProfileData } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const EditProfile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.user.profileData);

  useEffect(() => {
    dispatch(getProfileData());
  }, []);
  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item md={6} style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Paper style={{ paddingBottom: 20, marginTop: 10, marginBottom: 20 }}>
            <Container>
              <div style={{ paddingTop: 20 }}>
                <Typography variant="h5">
                  <span>Edit Profile</span>
                </Typography>
              </div>
              <form>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <IconButton>
                    <Avatar
                      src={profileData?.profile[0]?.user_image}
                      style={{ width: 150, height: 150 }}
                    />
                  </IconButton>
                </div>

                <TextField
                  name="full_name"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  label="Full Name"
                  defaultValue={profileData?.full_name}
                />
                <TextField
                  name="email"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  type="email"
                  label="Email"
                  defaultValue={profileData?.email}
                />
                <TextField
                  name="username"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  label="Username"
                  defaultValue={profileData?.username}
                />
                <TextField
                  name="bio"
                  margin="normal"
                  fullWidth
                  multiline
                  rows={3}
                  variant="outlined"
                  label="Bio"
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
