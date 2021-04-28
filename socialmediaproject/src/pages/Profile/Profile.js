import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import { Helmet } from "react-helmet";
const ProfileContainer = styled(Container)`
  margin-top: 10px;
`;
const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <ProfileContainer>
        <h1>Profile</h1>
      </ProfileContainer>
    </>
  );
};

export default Profile;
