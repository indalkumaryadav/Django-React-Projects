import { Grid, Paper } from "@material-ui/core";
import NavBar from "../../components/Header/NavBar";
import Post from "../../components/Post/Post";
import SideBar from "../../components/Sidebar/SideBar";
import User from "../../components/User/User";

const Home = () => {
  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item md={3}>
          <SideBar />
        </Grid>
        <Grid item md={6}>
          <Post />
          <Post />
          <Post />
          <Post />
        </Grid>
        <Grid item md={3}>
          <Paper>
            <User />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
