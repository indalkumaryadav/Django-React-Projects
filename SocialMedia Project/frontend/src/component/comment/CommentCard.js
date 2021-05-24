import React from "react";
import { Typography, Avatar, IconButton } from "@material-ui/core";

const CommentCard = ({ image, content, email }) => {
  return (
    <div
      style={{
        width: 500,
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
          <Typography variant="subtitle1">{email}</Typography>
          <Typography
            variant="subtitle2"
            style={{
              fontWeight: "bold",
            }}
          >
            {content}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
