import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const StoryDiv = styled.div``;
const Story = () => {
  return (
    <StoryDiv onClick={() => alert("cliked")}>
      <IconButton>
        <Avatar
          src="https://images.unsplash.com/photo-1619426467888-a3f8ddb2c8d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
          style={{
            height: 56,
            width: 56,
          }}
        />
      </IconButton>
    </StoryDiv>
  );
};

export default Story;
