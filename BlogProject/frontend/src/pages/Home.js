import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import BlogCard from "../components/blog/BlogCard";
import NavBar from "../components/header/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Grid container>
          <Grid item md={3} xs={12}></Grid>
          <Grid item md={6} xs={12}>
            <BlogCard postTitle="heloo this us the post ittle" />
            <BlogCard postTitle="ittle" />
            <BlogCard postTitle="heloo this us the post ittle" />
            <BlogCard postTitle="heloo this us the post ittle" />
          </Grid>
          <Grid item md={3} xs={12}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
