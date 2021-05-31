import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const BlogCard = ({ postTitle }) => {
  const history = useHistory();
  return (
    <Card style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
      <CardHeader
        avatar={
          <IconButton
            onClick={() => {
              history.push("/username");
            }}
          >
            <Avatar aria-label="recipe">R</Avatar>
          </IconButton>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title="Indal Kumar"
        subheader="May 14, 2020"
      />
      <CardActionArea
        onClick={() => {
          history.push("/postTitle");
        }}
      >
        <CardMedia
          image="https://source.unsplash.com/random"
          title="Paella dish"
          style={{
            height: 0,
            paddingTop: "56.25%", // 16:9
          }}
        />
        <CardContent>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            {postTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
