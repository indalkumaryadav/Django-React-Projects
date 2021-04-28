import React, { useState } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import styled from "styled-components";
import Post from "../../components/Post/Post";
import Story from "../../components/Story/Story";
import { Helmet } from "react-helmet";
import Carousel from "react-elastic-carousel";

const StoryContainer = styled.div`
  display: flex;
`;

const Home = () => {
  const [state, setState] = useState([
    {
      indal: null,
    },
    {
      indal: null,
    },
    {
      indal: null,
    },
    {
      indal: null,
    },
    {
      indal: null,
    },
    {
      indal: null,
    },
    {
      indal: null,
    },
    {
      indal: null,
    },
    {
      indal: null,
    },
    {
      indal: null,
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Grid
        container
        style={{
          marginTop: 10,
        }}
      >
        <Grid item md={3}></Grid>
        <Grid item md={5}>
          <StoryContainer>
            <Paper
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <Carousel itemsToShow={4} pagination={false}>
                {state.map((item) => (
                  <Story />
                ))}
              </Carousel>
            </Paper>
          </StoryContainer>
          {state.map((item) => (
            <Post />
          ))}
        </Grid>
        <Grid item md={4} style={{}}>
          <h1>User Lost</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
