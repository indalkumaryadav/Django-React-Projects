import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardHeader,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData, getUserData } from "../../redux/actions/userAction";
import { logout } from "../../redux/actions/authAction";
import { loadPost } from "../../redux/actions/postAction";

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.user.profileData);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        elevation={1}
        style={{
          backgroundColor: "white",
          height: 60,
        }}
        position="sticky"
      >
        <Container
          style={{
            width: 1100,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: 60,
            }}
          >
            <div>
              <Button
                onClick={() => {
                  history.push("/");
                }}
              >
                Home
              </Button>
            </div>
            <div>
              <form>
                <input
                  placeholder="Search"
                  style={{
                    width: 400,
                    height: 40,
                    borderRadius: 5,
                    padding: 10,
                    fontSize: 16,
                    borderColor: "lightgrey",
                    outline: 0,
                  }}
                />
              </form>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              {localStorage.getItem("token") ? (
                <>
                  <Button
                    style={{
                      width: 120,
                      height: 45,
                      marginTop: 10,
                      backgroundColor: "#323ebe",
                      color: "white",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: 16,
                      marginRight: 20,
                    }}
                    onClick={() => {
                      history.push("/create");
                    }}
                  >
                    Create Post
                  </Button>

                  <IconButton>
                    <Avatar onClick={handleClick} />
                  </IconButton>
                </>
              ) : (
                <>
                  <Button
                    style={{
                      width: 80,
                      color: "#3b49df",
                      textTransform: "capitalize",
                      fontSize: 16,
                      marginRight: 15,
                      fontWeight: "600",
                    }}
                    onClick={() => {
                      history.push("/login");
                    }}
                  >
                    {"Login"}
                  </Button>
                  <Button
                    style={{
                      width: 150,
                      backgroundColor: "#323ebe",
                      color: "white",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                    onClick={() => {
                      history.push("/register");
                    }}
                  >
                    Create Account
                  </Button>
                </>
              )}
            </div>
          </div>
        </Container>
      </AppBar>
      {/* menu */}
      <Menu
        style={{ marginTop: 45, marginRight: 160 }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div style={{ width: 230 }}>
          <div style={{ height: 70 }}>
            <CardActionArea
              onClick={() => {
                dispatch(getUserData(profileData?.username));
                history.push(`/${profileData?.username}`);
                handleClose();
              }}
            >
              <Card elevation={0}>
                <CardHeader
                  subheader={profileData?.email}
                  title={profileData?.username}
                />
              </Card>
            </CardActionArea>
            <Divider />
          </div>
          <br />

          <MenuItem
            style={{ height: 40 }}
            onClick={() => {
              dispatch(logout());
              handleClose();
            }}
          >
            Logout
          </MenuItem>
        </div>
      </Menu>
    </>
  );
};

export default NavBar;
