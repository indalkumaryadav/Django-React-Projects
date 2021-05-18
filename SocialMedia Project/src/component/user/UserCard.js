import React, { useState, useEffect } from "react";
import { Avatar, Button, IconButton, Typography } from "@material-ui/core";
import styled from "styled-components";

const UserCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const UserCard = ({ image, email, username }) => {
  const [name, setName] = useState(null);
  useEffect(() => {
    if (email) {
      const name = email.substring(0, email.lastIndexOf("@"));
      setName(name);
    }
  }, []);
  return (
    <UserCardDiv>
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
          <Typography
            variant="subtitle1"
            style={{
              fontWeight: "bold",
            }}
          >
            {name}
          </Typography>
          <Typography variant="subtitle2">{username}</Typography>
        </div>
      </div>

      <Button
        style={{
          borderRadius: 50,
          textTransform: "capitalize",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Follow
      </Button>
    </UserCardDiv>
  );
};

export default UserCard;
