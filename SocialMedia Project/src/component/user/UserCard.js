import React, { useState, useEffect } from "react";
import { Avatar, Button, IconButton, Typography } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addUserFollowing } from "../../redux/actions/followingAction";
import { loadProfile } from "../../redux/actions/userAction";
import { loadPost } from "../../redux/actions/postAction";
import { getUserFollowing } from "../../redux/actions/followingAction";

const UserCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const UserCard = ({ userId, image, email, username }) => {
  const [name, setName] = useState(null);
  const [state, setState] = useState(false);
  const followingData = useSelector((state) => state.following);
  const dispatch = useDispatch();

  const handleFollowing = () => {
    if (state) {
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
    followingData?.data?.map((item) => {});
  }, [followingData]);

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
          onClick={() => {
            handleState();
            alert("unfollowing");
          }}
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
            dispatch(addUserFollowing(userId));
            dispatch(loadProfile());
            dispatch(loadPost());
            dispatch(getUserFollowing());
          }}
        >
          Follow
        </Button>
      )}
    </UserCardDiv>
  );
};

export default UserCard;
