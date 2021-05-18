import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/actions/postAction";
import { useForm } from "react-hook-form";

const Img = styled.img`
  width: 100%;
`;

const CreatePost = ({ setOpen }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const { register, handleSubmit } = useForm();

  const handleChange = (e) => {
    const file = e.target.files[0];
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
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("title", data.description);
    dispatch(addPost(formData));
  };

  return (
    <>
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
          margin="normal"
          fullWidth
          multiline
          name="description"
          rows={5}
          variant="outlined"
          inputRef={register}
        />
        <div>
          {image && (
            <div>
              <Img src={image} alt="" />
            </div>
          )}
        </div>
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
          Add
        </Button>
      </form>
    </>
  );
};

export default CreatePost;
