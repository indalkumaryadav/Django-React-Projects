import { Container, Grid } from "@material-ui/core";
import NavBar from "../components/Header/NavBar";
import User from "../components/User/User";
import Post from "../components/Post/Post";

const Home = () => {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: 10 }}>
        <Grid container spacing={10}>
          <Grid item md={3}>
            <User />
          </Grid>
          <Grid item md={6}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </Grid>
          <Grid item md={3}>
            {/*  */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
