import { Container, Divider, IconButton, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { RightDiv } from './style';
import MenuIcon from '@material-ui/icons/Menu';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/Notifications';
import UserCard from '../user/UserCard';
import { useSelector } from 'react-redux';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import PopUp from '../common/PopUp';

const RightSideBar = ({ handleMenu }) => {
  const [state, setState] = useState(false);
  const allUser = useSelector((state) => state.user.user);

  return (
    <>
      <RightDiv>
        <Container>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginBottom: 10,
            }}
          >
            <IconButton
              onClick={() => {
                handleMenu();
              }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Container>
        <Divider />

        <Typography
          style={{
            padding: 10,
            fontWeight: 'bold',
          }}
        >
          Suggestion for you
        </Typography>
        {allUser?.map((user, i) => {
          return (
            <div key={i}>
              {i <= 5 && (
                <UserCard
                  userId={user?.id}
                  image={user.profile.user_image}
                  email={user.email}
                  username={user.username}
                />
              )}
            </div>
          );
        })}
        <Button
          style={{
            marginTop: 20,
          }}
          fullWidth
          onClick={() => setState(true)}
        >
          See More <DoubleArrowIcon />
        </Button>
      </RightDiv>

      <PopUp title="Suggestion for you" open={state} setOpen={setState}>
        <div
          style={{
            width: 400,
          }}
        >
          <Container>
            {allUser?.map((user, i) => {
              return (
                <UserCard
                  key={i}
                  userId={user?.id}
                  image={user?.profile?.user_image}
                  email={user?.email}
                  username={user?.username}
                />
              );
            })}
          </Container>
        </div>
      </PopUp>
    </>
  );
};

export default RightSideBar;
