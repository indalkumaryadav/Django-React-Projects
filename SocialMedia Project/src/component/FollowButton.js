import React, { useState, useEffect } from "react";
import { Avatar, Button, IconButton, Typography } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addUserFollowing } from "../../redux/actions/followingAction";
import { loadProfile } from "../../redux/actions/userAction";
import { loadPost } from "../../redux/actions/postAction";
import {
  getUserFollowing,
  unUserFollowing,
} from "../../redux/actions/followingAction";

const UserCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const UserCard = ({ isFollowing, userId, image, email, username }) => {
  const [name, setName] = useState(null);
  const [state, setState] = useState(false);
  const following = useSelector((state) => state.following);
  const allUser = useSelector((state) => state.user.user);
  const user = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  const filterData = [];

  const handleFollowing = () => {
    if (!state) {
      dispatch(addUserFollowing(userId));
      dispatch(loadProfile());
      dispatch(loadPost());
      dispatch(getUserFollowing());
      dispatch(getUserFollowing());
    } else {
      dispatch(unUserFollowing(userId));
      dispatch(getUserFollowing());
      dispatch(loadProfile());
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
    isFollowing?.map((item) => {
      setState(true);
    });
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
          onClick={() => {
            handleState();
          }}
        >
          Follow
        </Button>
      )}
    </UserCardDiv>
  );
};

export default UserCard;
