import React, { useState, useEffect } from "react";
import {
  Avatar,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import Post from "../../components/Post/Post";
import Story from "../../components/Story/Story";
import { Helmet } from "react-helmet";
import Carousel from "react-elastic-carousel";
import { useHistory } from "react-router-dom";
import User from "../../components/User/User";
import PopUp from "../../components/common/PopUp";

const StoryContainer = styled.div`
  display: flex;
`;

const Home = () => {
  useEffect(() => {}, []);
  const history = useHistory();
  const [open, setOpen] = useState(false);
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
          <div
            style={{
              position: "fixed",
              height: "100vh",
              right: 50,
              width: 300,

              padding: 15,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={() => history.push("/profile")}>
                  <Avatar />
                </IconButton>
                <div>
                  <Typography>username</Typography>
                  <Typography variant="subtitle2">fullname</Typography>
                </div>
              </div>

              <Typography
                onClick={() => alert("clicked")}
                style={{
                  color: "blue",
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                Switch
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Suggession for you</Typography>
              <Typography
                onClick={() => setOpen(true)}
                style={{
                  cursor: "pointer",
                }}
              >
                See All
              </Typography>
            </div>

            {state.map((item) => (
              <User />
            ))}
          </div>
        </Grid>
      </Grid>

      <PopUp title="suggested " open={open} setOpen={setOpen}>
        <Container>
          {state.map((item) => (
            <User />
          ))}
        </Container>
      </PopUp>
    </>
  );
};

export default Home;
