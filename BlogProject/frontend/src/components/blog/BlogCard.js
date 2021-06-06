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
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Title = styled(Typography)`
  font-weight: bold;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const BlogCard = ({
  title,
  image,
  userImage,
  username,
  email,
  created_at,
  postId,
}) => {
  const history = useHistory();

  return (
    <Card style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
      <CardHeader
        avatar={
          <IconButton
            onClick={() => {
              history.push(`/${username}`);
            }}
          >
            <Avatar aria-label="recipe" src={userImage}>
              R
            </Avatar>
          </IconButton>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={email}
        subheader={created_at}
      />
      <CardActionArea
        onClick={() => {
          history.push(`/${username}/${title}/${postId}`);
        }}
      >
        <CardMedia
          image={image}
          title="Paella dish"
          style={{
            height: 0,
            paddingTop: "56.25%", // 16:9
          }}
        />
      </CardActionArea>
      <CardContent>
        <Title
          onClick={() => {
            history.push(`/${username}/${title}/${postId}`);
          }}
          variant="h5"
        >
          {title}
        </Title>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
