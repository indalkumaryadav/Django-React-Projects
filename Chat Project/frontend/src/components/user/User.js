import React from "react";
import "./user.css";
import { Avatar, IconButton, Typography } from "@material-ui/core";

const User = () => {
  return (
    <div className="user">
      <IconButton>
        <Avatar />
      </IconButton>
      <div>
        <Typography>Indal Kumar</Typography>
        <Typography variant="subtitle2">Indal Kumar</Typography>
      </div>
    </div>
  );
};

export default User;
