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
import styled from "styled-components";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Title = styled(Typography)`
  font-weight: bold;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

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
            <MoreVertIcon />
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
      </CardActionArea>
      <CardContent>
        <Title
          onClick={() => {
            history.push("/postTitle");
          }}
          variant="h5"
        >
          {postTitle}
        </Title>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
