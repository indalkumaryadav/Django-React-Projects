import React, { useEffect, useState } from 'react';
import { Avatar, Container, Divider, Grid, IconButton, Typography } from '@material-ui/core';
import {} from './style';
import PopUp from '../common/PopUp';
import { useSelector, useDispatch } from 'react-redux';
import PostCard from '../post/PostCard';
import UserCard from './UserCard';
import { getUserFollowing } from '../../redux/actions/followingAction';
import { getUserProfileById } from '../../redux/actions/userAction';
import UserProfile from '../profile/UserProfile';
import { getUserFollower } from '../../redux/actions/followerAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const User = ({ post, follower, bio, following, email, image, username }) => {
  const [postOpen, setPostOpen] = useState(false);
  const [followersOpen, setFollowsOpen] = useState(false);
  const [followingOpen, setFollowingOpen] = useState(false);
  const [state, setState] = useState(false);
  const followingUser = useSelector((state) => state.following.data);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);
  const followerUser = useSelector((state) => state.follower.data);
  const postData = useSelector((state) => state.post.postData);
  const currentUserPost = useSelector((state) => state.post.post.current_user_post);

  useEffect(() => {
    dispatch(getUserFollowing());
    dispatch(getUserProfileById(1));
    dispatch(getUserFollower());
    if (postData?.message) {
      return alert(postData?.message);
    }
  }, [postData]);

  return (
    <>
      <Container
        style={{
          padding: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={() => {
              setState(true);
            }}
          >
            <Avatar
              src={image}
              style={{
                height: 80,
                width: 80,
              }}
            />
          </IconButton>
          <Typography
            variant="subtitle1"
            style={{
              fontWeight: 'bold',
            }}
          >
            {email}
          </Typography>
          <Typography variant="subtitle2">{username || 'admin'}</Typography>
          <Typography variant="subtitle2">{bio}</Typography>
        </div>

        {/*  */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => {
              setPostOpen(true);
            }}
          >
            <Typography
              style={{
                fontWeight: 'bold',
              }}
            >
              {post}
            </Typography>
            <Typography variant="subtitle2">Posts</Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => {
              setFollowsOpen(true);
            }}
          >
            <Typography
              style={{
                fontWeight: 'bold',
              }}
            >
              {follower}
            </Typography>
            <Typography variant="subtitle2">Followers</Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => {
              setFollowingOpen(true);
            }}
          >
            <Typography
              style={{
                fontWeight: 'bold',
              }}
            >
              {following}
            </Typography>
            <Typography component="p" variant="subtitle2">
              Following
            </Typography>
          </div>
        </div>
      </Container>
      <Divider />
      {/* post list */}
      <PopUp title="Your Post" open={postOpen} setOpen={setPostOpen}>
        <div
          style={{
            width: 700,
          }}
        >
          <Grid container spacing={1}>
            {currentUserPost?.length ? (
              currentUserPost?.map((item, i) => {
                return (
                  <Grid key={i} item md={4}>
                    <PostCard
                      postId={item?.id}
                      post={currentUserPost}
                      title={item?.title}
                      image={item?.image}
                    />
                  </Grid>
                );
              })
            ) : (
              <div
                style={{
                  marginTop: 30,
                  display: 'flex',
                  justifyContent: 'center',
                  width: 700,
                }}
              >
                <h3>No Post yet</h3>
              </div>
            )}
          </Grid>
        </div>
      </PopUp>
      {/* Followers list */}
      <PopUp title="Followers" open={followersOpen} setOpen={setFollowsOpen}>
        <div
          style={{
            width: 400,
          }}
        >
          <Container>
            {followerUser?.map((item, i) => {
              return (
                <UserCard
                  key={i}
                  userId={item.followed_by.id}
                  isFollowing={item?.followed_by}
                  image={item?.followed_by?.profile?.user_image}
                  email={item?.followed_by?.email}
                  username={item?.followed_by?.username}
                />
              );
            })}
          </Container>
        </div>
      </PopUp>
      {/* Following */}
      <PopUp title="Following" open={followingOpen} setOpen={setFollowingOpen}>
        <div
          style={{
            width: 400,
          }}
        >
          <Container>
            {followingUser?.map((item, i) => {
              return (
                <UserCard
                  key={i}
                  userId={item.following_by.id}
                  isFollowing={item?.is_following}
                  image={item?.following_by?.profile?.user_image}
                  email={item?.following_by?.email}
                  username={item?.following_by?.username}
                />
              );
            })}
          </Container>
        </div>
      </PopUp>

      <PopUp title={email} open={state} setOpen={setState}>
        {state && <UserProfile userId={user?.id} />}
      </PopUp>
      {/*  */}
      <ToastContainer />
    </>
  );
};

export default User;
