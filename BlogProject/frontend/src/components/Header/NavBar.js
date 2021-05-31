import React from "react";
import { AppBar, Avatar, Button, IconButton, Toolbar } from "@material-ui/core";
import { useHistory } from "react-router";
import NotificationsIcon from "@material-ui/icons/Notifications";

const NavBar = () => {
  const history = useHistory();
  return (
    <>
      <AppBar
        style={{
          backgroundColor: "white",
          height: 56,
        }}
        position="sticky"
      >
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
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
                justifyContent: "space-between",
                alignItems: "center",
                width: 270,
              }}
            >
              <Button
                style={{
                  width: 120,
                  height: 40,
                  backgroundColor: "#323ebe",
                  color: "white",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: 16,
                  marginRight: 10,
                }}
                onClick={() => {
                  history.push("/create");
                }}
              >
                Create Post
              </Button>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  history.push("/username");
                }}
              >
                <Avatar />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
