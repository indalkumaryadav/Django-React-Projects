import React from "react";
import "./user_profile.css";
import { Card, Avatar, IconButton, Typography } from "@material-ui/core";

const UserProfile = () => {
  return (
    <Card
      style={{
        minHeight: 250,
        maxHeight: 250,
        minWidth: 250,
        maxWidth: 250,
        height: 250,
        width: 250,
        marginTop: 10,
        marginRight: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <IconButton>
        <Avatar style={{ width: 100, height: 100 }} />
      </IconButton>
      <Typography>Indal Kumar</Typography>
    </Card>
  );
};

export default UserProfile;
