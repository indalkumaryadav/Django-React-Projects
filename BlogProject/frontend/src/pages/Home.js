import { Grid } from "@material-ui/core";
import React from "react";
import NavBar from "../components/header/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item md={4}>
          <h1>Indal</h1>
        </Grid>
        <Grid item md={6}>
          <h1>Indal</h1>
        </Grid>
        <Grid item md={2}>
          <h1>Indal</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
