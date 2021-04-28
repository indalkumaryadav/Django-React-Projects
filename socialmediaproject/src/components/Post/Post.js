import {
  Avatar,
  IconButton,
  Paper,
  Typography,
  Badge,
  Container,
} from "@material-ui/core";
import React, { useState } from "react";
import Comment from "../Comment/Comment";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TelegramIcon from "@material-ui/icons/Telegram";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import PopUp from "../common/PopUp";
import LikeList from "../Likes/LikeList";
import CommentList from "../Comment/CommentList";
import { useHistory } from "react-router";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Post = ({ onCommentClick }) => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);
  const [like, setLike] = useState(false);

  const [commentOpen, setCommentOpen] = useState(false);
  const history = useHistory();
  const handleComment = () => {
    setState(!state);
  };
  const handleLike = () => {
    setLike(!like);
  };
  const handleDoubleClick = () => {
    setLike(true);
  };
  return (
    <>
      <Paper
        elevation={4}
        style={{
          marginTop: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton onClick={() => history.push("/profile")}>
            <Avatar />
          </IconButton>
          <Typography>indalkumar56</Typography>
        </div>
        <img
          onDoubleClick={handleDoubleClick}
          src="https://images.unsplash.com/photo-1619426467888-a3f8ddb2c8d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
          style={{
            width: "100%",
            cursor: "pointer",
          }}
        />
        <div>
          <IconButton onClick={handleLike}>
            {like ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton onClick={handleComment}>
            <ChatBubbleIcon />
          </IconButton>
          <IconButton>
            <TelegramIcon />
          </IconButton>
        </div>

        {/*  */}
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                cursor: "pointer",
                marginBottom: 15,
              }}
              variant="subtitle2"
              onClick={() => setOpen(true)}
            >
              50<span> Likes</span>
            </Typography>
          </div>
          <Typography
            onClick={() => setCommentOpen(true)}
            variant="subtitle2"
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              cursor: "pointer",
              marginBottom: 15,
            }}
          >
            50 Comments
          </Typography>
        </Container>

        {state && <Comment />}
      </Paper>
      {/* likes */}
      <PopUp title="All Likes " open={open} setOpen={setOpen}>
        <LikeList />
        <LikeList />
        <LikeList />

        <LikeList />
        <LikeList />
        <LikeList />
        <LikeList />
      </PopUp>
      {/* comments */}
      <PopUp title="All Comments " open={commentOpen} setOpen={setCommentOpen}>
        <CommentList />
        <CommentList />
        <CommentList />
        <CommentList />
        <CommentList />
        <CommentList />
        <CommentList />
        <CommentList />
        <CommentList />
      </PopUp>
    </>
  );
};

export default Post;
