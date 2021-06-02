import React from "react";
import {
  AppBar,
  Avatar,
  Button,
  Container,
  Divider,
  IconButton,
} from "@material-ui/core";
import { useHistory } from "react-router";

const NavBar = () => {
  const history = useHistory();
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
        <Container style={{ padding: 0 }}>
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
              {localStorage.getItem("access") ? (
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
              ) : (
                <>
                  <Button
                    style={{
                      width: 120,
                      backgroundColor: "#323ebe",
                      color: "white",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                    onClick={() => {
                      history.push("/create");
                    }}
                  >
                    Create Post
                  </Button>

                  <IconButton
                    onClick={() => {
                      history.push("/username");
                    }}
                  >
                    <Avatar />
                  </IconButton>
                </>
              )}
            </div>
          </div>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
