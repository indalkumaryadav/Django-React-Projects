import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Snackbar, TextField } from "@material-ui/core";
import styled from "styled-components";
import ImageIcon from "@material-ui/icons/Image";
import { loadPost, updateUserPost } from "../../redux/actions/postAction";
import { useDispatch, useSelector } from "react-redux";

const Img = styled.img`
  width: 100%;
`;
const EditPost = (props) => {
  const { postId, title, image, setOpen } = props;
  const { register, handleSubmit } = useForm();
  const [imageFile, setImageFile] = useState(null);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const fileTypes = ["jpg", "png", "jpeg", "PNG"];
      const fileType = file.name.split(".")[1];
      if (fileType) {
        setImageFile(fileReader.result);
        setState(true);
      } else {
        return alert(`please upload a valid file format. (${fileTypes})`);
      }
    };
    fileReader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    if (!data.image[0]) {
      const title = data.title;
      dispatch(updateUserPost(postId, { title }));
      dispatch(loadPost());
    } else if (data.image[0]) {
      formData.append("image", data.image[0]);
      dispatch(updateUserPost(postId, formData));
      dispatch(loadPost());
    } else {
      formData.append("title", data.title);
      formData.append("image", data.image[0]);
      dispatch(updateUserPost(postId, formData));
      dispatch(loadPost());
    }
  };

  return (
    <>
      <div
        style={{
          width: 500,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <TextField
            name="title"
            margin="normal"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            inputRef={register}
            defaultValue={title}
          />
          {state ? <Img src={imageFile} alt="" /> : <Img src={image} alt="" />}
          <Button
            type="submit"
            fullWidth
            style={{
              backgroundColor: "blue",
              color: "white",
              marginTop: 10,
            }}
            onClick={() => {
              setOpen(false);
            }}
          >
            Update
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditPost;
