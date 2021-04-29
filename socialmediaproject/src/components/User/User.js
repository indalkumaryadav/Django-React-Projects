import { Avatar, Button, IconButton, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  &:hover {
    transform: scale(1.06);
    cursor: pointer;
    transition: 0.6s ease-in-out;
  }
`;

const User = ({ image, username, full_name }) => {
  return (
    <MainDiv
      style={{
        width: 300,
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
        <IconButton>
          <Avatar src={image} />
        </IconButton>
        <div>
          <Typography>Username</Typography>
          <Typography>fullname</Typography>
        </div>
      </div>
      <div>
        <Button
          size="small"
          style={{
            backgroundColor: "#0095f6",
            textTransform: "capitalize",
            color: "white",
          }}
        >
          Follow
        </Button>
      </div>
    </MainDiv>
  );
};

export default User;
