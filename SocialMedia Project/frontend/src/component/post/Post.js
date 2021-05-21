import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Avatar,
  IconButton,
  Container,
  Divider,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TelegramIcon from "@material-ui/icons/Telegram";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import PopUp from "../common/PopUp";
import { MainDiv } from "./style";
import Comment from "../../component/comment/Comment";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../user/UserCard";
import { addPostLike, removeLike } from "../../redux/actions/likeAction";
import { loadPost } from "../../redux/actions/postAction";
import CommentCard from "../comment/CommentCard";
const Post = ({
  userName,
  userImage,
  postComment,
  postLike,
  image,
  title,
  id,
  liked_by,
}) => {
  const [open, setOpen] = useState(false);
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);

  const likeUserPost = () => {
    if (!like) {
      dispatch(addPostLike(id));
      dispatch(loadPost());
    } else {
      dispatch(removeLike(id));
      dispatch(loadPost());
    }
  };

  const handleLike = () => {
    setLike(!like);
    likeUserPost();
  };
  const handleComment = () => {
    setComment(!comment);
  };
  useEffect(() => {
    liked_by?.filter((item) => {
      if (item?.liked_by?.email === user.email) {
        setLike(true);
      }
    });
  }, []);
  return (
    <>
      <MainDiv>
        <Paper
          style={{
            marginBottom: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton>
              <Avatar src={userImage} />
            </IconButton>
            <Typography>{userName}</Typography>
          </div>
          <img
            src={image}
            style={{
              width: "100%",
              cursor: "pointer",
            }}
            alt=""
          />
          {/*  */}
          <div>
            <IconButton onClick={handleLike}>
              {like ? (
                <FavoriteIcon style={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            {/*  */}
            <IconButton onClick={handleComment}>
              <ChatBubbleIcon />
            </IconButton>
            {/*  */}
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
                {postLike?.length}
                <span> Likes</span>
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
              {postComment?.length} Comments
            </Typography>
          </Container>
          <Divider
            style={{
              opecity: "0.5",
            }}
          />

          <Container
            style={{
              padding: 10,
            }}
          >
            <Typography>{title}</Typography>
          </Container>

          {/* post comment */}
          {comment && (
            <Container>
              <Comment id={id} setComment={setComment} />
            </Container>
          )}
        </Paper>

        {/* likes */}
        <PopUp title="All Likes " open={open} setOpen={setOpen}>
          <div
            style={{
              width: 500,
            }}
          >
            {liked_by?.map((user, i) => {
              return (
                <UserCard
                  key={i}
                  image={user?.profile?.user_image}
                  email={user.user?.email}
                  username={user.user?.username}
                />
              );
            })}
          </div>
        </PopUp>
        {/* comments */}
        <PopUp
          title="All Comments "
          open={commentOpen}
          setOpen={setCommentOpen}
        >
          <CommentCard content="good pic" />
          <CommentCard content="good pic" />
          <CommentCard content="good pic" />
          <CommentCard content="good pic" />
        </PopUp>
      </MainDiv>
    </>
  );
};

export default Post;
