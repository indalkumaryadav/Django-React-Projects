import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { IconButton, Typography } from "@material-ui/core";
import styled from "styled-components";
import PopUp from "../common/PopUp";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ImageIcon from "@material-ui/icons/Image";
import { createUserStory } from "../../redux/actions/storyAction";

const AddStoryDiv = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const AddStory = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(true);
  const [image, setImage] = useState(null);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setState(false);
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const fileTypes = ["jpg", "png", "jpeg", "PNG"];
      const fileType = file.name.split(".")[1];
      if (fileType) {
        setImage(fileReader.result);
      } else {
        return alert(`please upload a valid file format. (${fileTypes})`);
      }
    };
    fileReader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    const image = data.image[0];
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      dispatch(createUserStory(formData));
      setOpen(false);
      setImage("");
    }
  };

  return (
    <>
      <AddStoryDiv>
        <IconButton
          style={{
            width: 60,
            height: 60,
          }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <AddIcon />
        </IconButton>
        <Typography variant="subtitle2">Add Story</Typography>
      </AddStoryDiv>

      <PopUp title="Add Story" open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              width: 400,
            }}
          >
            <Button
              component="label"
              style={{
                textTransform: "capitalize",
              }}
            >
              <input
                name="image"
                type="file"
                hidden
                onChange={handleChange}
                ref={register}
              />
              Select Image <ImageIcon />
            </Button>
          </div>
          <div>
            {image && (
              <div>
                <Img src={image} alt="" />
              </div>
            )}
          </div>
          <Button
            fullWidth
            disabled={state}
            type="submit"
            style={{
              backgroundColor: "purple",
              marginTop: 15,
              textTransform: "capitalize",
              color: "white",
            }}
          >
            Submit
          </Button>
        </form>
      </PopUp>
    </>
  );
};

export default AddStory;
