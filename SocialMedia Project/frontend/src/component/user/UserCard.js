import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Avatar, Button, IconButton, Typography } from "@material-ui/core";
import {
  addUserFollowing,
  getUserFollowing,
  unUserFollowing,
} from "../../redux/actions/followingAction";
import { loadProfile } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const UserCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const UserCard = ({ userId, email, username, image, isFollowing }) => {
  const [name, setName] = useState(null);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);

  const handleFollowing = () => {
    if (!state) {
      dispatch(addUserFollowing(userId));
      dispatch(loadProfile());
      dispatch(getUserFollowing());
    } else {
      dispatch(unUserFollowing(userId));
      dispatch(loadProfile());
      dispatch(getUserFollowing());
      alert("now you are unfollowing");
    }
  };
  const handleState = () => {
    setState(!state);
    handleFollowing();
  };

  useEffect(() => {
    if (email) {
      const name = email.substring(0, email.lastIndexOf("@"));
      setName(name);
    }
    if (isFollowing) {
      setState(true);
    }
  }, []);

  return (
    <UserCardDiv>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton>
          <Avatar src={image} />
        </IconButton>
        <div>
          <Typography
            variant="subtitle1"
            style={{
              fontWeight: "bold",
            }}
          >
            {name}
          </Typography>
          <Typography variant="subtitle2">{username}</Typography>
        </div>
      </div>
      {state ? (
        <Button
          style={{
            borderRadius: 50,
            textTransform: "capitalize",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={handleState}
        >
          Unfollow
        </Button>
      ) : (
        <Button
          style={{
            borderRadius: 50,
            textTransform: "capitalize",
            backgroundColor: "blue",
            color: "white",
          }}
          onClick={handleState}
        >
          Follow
        </Button>
      )}
    </UserCardDiv>
  );
};

export default UserCard;
