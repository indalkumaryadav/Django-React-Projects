import React, { useState } from 'react';
import { Avatar, IconButton, Typography } from '@material-ui/core';
import styled from 'styled-components';
import PopUp from '../common/PopUp';

const StoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Story = ({ image, email }) => {
  const name = email.substring(0, email.lastIndexOf('@'));
  const [open, setOpen] = useState(false);

  return (
    <>
      <StoryDiv
        onClick={() => {
          setOpen(true);
        }}
      >
        <IconButton>
          <Avatar
            src={image}
            style={{
              height: 70,
              width: 70,
            }}
          />
        </IconButton>
        <Typography
          style={{
            textOverflow: 'ellipsis',
          }}
          variant="subtitle2"
        >
          {name}
        </Typography>
      </StoryDiv>
      <PopUp title="Story" open={open} setOpen={setOpen}>
        <img src={image} style={{ width: '100%' }} alt="story_img" />
      </PopUp>
    </>
  );
};

export default Story;
