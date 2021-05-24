import React, { useEffect, useState } from 'react';
import { IconButton, Avatar, Typography, Grid } from '@material-ui/core';
import { UserPorfileCard } from './style';
import EditIcon from '@material-ui/icons/Edit';
import EditProfile from './EditProfile';
import { useDispatch, useSelector } from 'react-redux';

const ProfileCard = ({
  bio,
  fullName,
  userName,
  email,
  user_image,
  posts,
  followers,
  following,
}) => {
  const [state, setState] = useState(false);
  const currentUser = useSelector((state) => state.user.profile);

  return (
    <>
      <UserPorfileCard>
        <div
          style={{
            display: 'flex',
          }}
        >
          <IconButton>
            <Avatar
              src={user_image}
              style={{
                height: 80,
                width: 80,
              }}
            />
          </IconButton>
          <div>
            <Typography
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              {fullName || email}
            </Typography>
            <Typography>{userName}</Typography>
            {/*  */}
            <div
              style={{
                display: 'flex',
                width: 300,
                justifyContent: 'space-between',
                marginTop: 10,
                alignItems: 'center',
              }}
            >
              <Typography>
                <span style={{ fontWeight: 'bold' }}>{posts}</span> posts
              </Typography>

              <Typography>
                <span style={{ fontWeight: 'bold' }}>{followers}</span>
                &nbsp; followers
              </Typography>

              <Typography>
                <span style={{ fontWeight: 'bold' }}>{following}</span>
                &nbsp; following
              </Typography>
            </div>
            <Typography>{bio || 'Your bio hello this is my bio indal kumar'}</Typography>
          </div>
        </div>

        <div>
          {currentUser.email === email && (
            <IconButton
              style={{
                backgroundColor: 'blue',
                color: 'white',
              }}
              onClick={() => {
                setState(true);
              }}
            >
              <EditIcon />
            </IconButton>
          )}
        </div>
      </UserPorfileCard>

      {state && <EditProfile open={state} setOpen={setState} />}
    </>
  );
};

export default ProfileCard;
