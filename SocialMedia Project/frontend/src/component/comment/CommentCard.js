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
          <Typography
            variant="subtitle1"
            style={{
              fontWeight: "bold",
            }}
          >
            indalkumar
          </Typography>
          <Typography variant="subtitle2">{content}</Typography>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
