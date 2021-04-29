import React from "react";
import styled from "styled-components";
import {
  Avatar,
  Container,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Helmet } from "react-helmet";

const ProfileContainer = styled(Container)`
  margin-top: 10px;
  background-color: red;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      {/*  */}

      <ProfileContainer>
        <IconButton>
          <Avatar
            style={{
              width: 150,
              height: 150,
            }}
          />
        </IconButton>
        <div>
          <Typography>Username</Typography>
          <div
            style={{
              display: "flex",
            }}
          >
            <div>followers</div>
            <div>followers</div>
            <div>followers</div>
          </div>
        </div>
      </ProfileContainer>
    </>
  );
};

export default Profile;
