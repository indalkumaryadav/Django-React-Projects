import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { MainDiv, SearchInput, SearchDiv, CreatePostButton } from "./style";
import SearchIcon from "@material-ui/icons/Search";
import PopUp from "../common/PopUp";
import CreatePost from "../post/CreatePost";

const NavBar = () => {
  const [createPostDialog, setCreatePostDialog] = useState(false);
  return (
    <>
      <MainDiv>
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "90%",
          }}
        >
          <form>
            <SearchDiv>
              <SearchIcon style={{ color: "white" }} />
              <SearchInput placeholder="Search" />
            </SearchDiv>
          </form>
          <CreatePostButton onClick={() => setCreatePostDialog(true)}>
            Create new Post
          </CreatePostButton>
        </Container>
      </MainDiv>

      <PopUp
        title="Create new Post "
        open={createPostDialog}
        setOpen={setCreatePostDialog}
      >
        <CreatePost setOpen={setCreatePostDialog} />
      </PopUp>
    </>
  );
};

export default NavBar;
