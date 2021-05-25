import React, { useState } from 'react';
import { Avatar, Button, IconButton, Typography, Container } from '@material-ui/core';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile } from '../../redux/actions/userAction';
import {
  addUserFollowing,
  getUserFollowing,
  unUserFollowing,
} from '../../redux/actions/followingAction';
import { motion } from 'framer-motion';
import PopUp from '../common/PopUp';
import UserProfile from '../profile/UserProfile';

const UserCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const UserCard = ({ userId, image, username, email }) => {
  const dispatch = useDispatch();
  const userFollowing = useSelector((state) => state.following.data);

  const [open, setOpen] = useState(false);
  var name = email.substring(0, email.indexOf('@'));

  const followUserId = [];
  userFollowing.filter((data) => {
    followUserId.push(data.following_by.id);
  });
  const [following, setFollowing] = useState(() => followUserId.includes(userId));

  const unFollow = () => {
    dispatch(unUserFollowing(userId));
    dispatch(loadProfile());
    dispatch(getUserFollowing());
    alert('now you are unfollowing');
    setFollowing(false);
  };

  const handleFollow = () => {
    dispatch(addUserFollowing(userId));
    dispatch(loadProfile());
    dispatch(getUserFollowing());
    alert('now you are following');
    setFollowing(true);
  };

  return (
    <>
      <motion.div transition={{ duration: 0.5 }} whileHover={{ scale: 1.04 }}>
        <UserCardDiv>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton
              onClick={() => {
                setOpen(true);
              }}
            >
              <Avatar src={image} />
            </IconButton>
            <div>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: 'bold',
                }}
              >
                {name}
              </Typography>
              <Typography variant="subtitle2">{username}</Typography>
            </div>
          </div>
          {following ? (
            <Button
              style={{
                borderRadius: 50,
                textTransform: 'capitalize',
                backgroundColor: 'red',
                color: 'white',
              }}
              onClick={unFollow}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              style={{
                borderRadius: 50,
                textTransform: 'capitalize',
                backgroundColor: 'blue',
                color: 'white',
              }}
              onClick={handleFollow}
            >
              Follow
            </Button>
          )}
        </UserCardDiv>
      </motion.div>
      <PopUp open={open} setOpen={setOpen}>
        <div
          style={{
            width: 800,
          }}
        >
          <Container>
            <UserProfile userId={userId} />
          </Container>
        </div>
      </PopUp>
    </>
  );
};

export default UserCard;
