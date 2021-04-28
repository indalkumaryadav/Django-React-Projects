import React from "react";
import {
  AppBar,
  Avatar,
  Container,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ExploreIcon from "@material-ui/icons/Explore";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router";

const MainDiv = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: "center";
`;

const LeftDiv = styled.div`
  display: flex;
`;
const MiddleDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  background-color: lightgray;
  height: 40px;
  padding: 10px;
  border-radius: 25px;
`;
const RightDiv = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const NavBar = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/search/indal");
  };

  return (
    <>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: "white",
        }}
      >
        <MainDiv>
          <LeftDiv>
            <Button
              onClick={() => {
                history.push("/");
              }}
            >
              Instsgram
            </Button>
          </LeftDiv>
          <MiddleDiv>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <SearchIcon
                style={{
                  color: "black",
                }}
              />
              <input
                style={{
                  width: 250,
                  outline: "none",
                  padding: 10,
                  fontSize: 16,
                  background: "transparent",
                  border: "none",
                }}
              />
            </form>
          </MiddleDiv>
          <RightDiv>
            <IconButton
              onClick={() => {
                history.push("/");
              }}
            >
              <HomeIcon />
            </IconButton>
            <IconButton>
              <TelegramIcon />
            </IconButton>
            <IconButton>
              <ExploreIcon />
            </IconButton>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                history.push("/profile");
              }}
            >
              <Avatar />
            </IconButton>
          </RightDiv>
        </MainDiv>
      </AppBar>
    </>
  );
};

export default NavBar;
