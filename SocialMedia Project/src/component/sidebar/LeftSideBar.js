import React from "react";
import { LeftDiv } from "./style";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Container, IconButton, Typography, Divider } from "@material-ui/core";
import User from "../user/User";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authAction";

const LeftSideBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);
  const userPost = useSelector((state) => state.post.post);

  return (
    <LeftDiv>
      <Container>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <Typography
            style={{
              fontFamily: "cursive",
            }}
          >
            Instagram
          </Typography>
        </div>
      </Container>
      {/* user */}
      <User
        follower={user?.follower?.length}
        following={user?.following?.length}
        email={user?.email}
        image={user?.profile?.user_image}
        post={userPost?.current_user_post?.length}
      />
      {/* sidebar option */}
      <div
        style={{
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <SideBarOption Icon={HomeIcon} title="Home" />
        <SideBarOption Icon={SettingsIcon} title="Settings" />
      </div>
      <Divider />

      <SideBarOption
        Icon={ExitToAppIcon}
        title="Logout"
        onClick={() => {
          dispatch(logout());
        }}
      />
    </LeftDiv>
  );
};

export default LeftSideBar;
