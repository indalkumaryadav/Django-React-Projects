import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { MainDiv, SearchInput, SearchDiv, CreatePostButton } from "./style";
import SearchIcon from "@material-ui/icons/Search";
import PopUp from "../common/PopUp";
import CreatePost from "../post/CreatePost";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const [createPostDialog, setCreatePostDialog] = useState(false);
  const history = useHistory();
  const [content, setContent] = useState("");
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
          <form
            onSubmit={() => {
              history.push(`/${content}`);
            }}
          >
            <SearchDiv>
              <SearchIcon style={{ color: "white" }} />
              <SearchInput
                onChange={(e) => setContent(e.target.value)}
                placeholder="Search user"
              />
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
