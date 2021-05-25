import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { MainDiv } from './style';
import { Paper, Typography, Avatar, IconButton, Container, Divider } from '@material-ui/core';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { loadPost } from '../../redux/actions/postAction';
import { useSelector, useDispatch } from 'react-redux';
import { addPostLike, removeLike } from '../../redux/actions/likeAction';
import Comment from '../../component/comment/Comment';
import CommentCard from '../comment/CommentCard';
import PopUp from '../common/PopUp';
import UserCard from '../user/UserCard';
import UserProfile from '../profile/UserProfile';

const Post = ({
  userName,
  userImage,
  postComment,
  postLike,
  image,
  title,
  id,
  liked_by,
  userId,
}) => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
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
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton onClick={() => setState(true)}>
              <Avatar src={userImage} />
            </IconButton>
            <Typography>{userName}</Typography>
          </div>
          <img
            src={image}
            style={{
              width: '100%',
              cursor: 'pointer',
            }}
            alt=""
          />
          {/*  */}
          <div>
            <IconButton onClick={handleLike}>
              {like ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
            </IconButton>
            <IconButton onClick={handleComment}>
              <ChatBubbleIcon />
            </IconButton>
          </div>
          {/*  */}
          <Container
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 4,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                style={{
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  cursor: 'pointer',
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
                fontWeight: 'bold',
                textDecoration: 'underline',
                cursor: 'pointer',
                marginBottom: 15,
              }}
            >
              {postComment?.length} Comments
            </Typography>
          </Container>
          <Divider
            style={{
              opecity: '0.5',
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
      </MainDiv>

      {/* likes */}
      <PopUp title="All Likes " open={open} setOpen={setOpen}>
        <div
          style={{
            width: 500,
          }}
        >
          {postLike.length ? (
            liked_by?.map((user, i) => {
              return (
                <UserCard
                  key={i}
                  image={user?.profile?.user_image}
                  email={user.user?.email}
                  username={user.user?.username}
                />
              );
            })
          ) : (
            <h4>No likes</h4>
          )}
        </div>
      </PopUp>
      {/* comments */}
      <PopUp title="All Comments " open={commentOpen} setOpen={setCommentOpen}>
        <div
          style={{
            width: 400,
          }}
        >
          {postComment.length ? (
            postComment?.map((comment, i) => {
              return (
                <CommentCard
                  key={i}
                  image={comment?.profile?.user_image}
                  email={comment.user?.email}
                  username={comment.user?.username}
                  content={comment.title}
                />
              );
            })
          ) : (
            <h4>No Comment</h4>
          )}
        </div>
      </PopUp>

      <PopUp title={user.email} open={state} setOpen={setState}>
        {state && <UserProfile userId={userId} />}
      </PopUp>
    </>
  );
};

export default Post;
