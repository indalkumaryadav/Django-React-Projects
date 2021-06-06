import { Button, Container, Grid, TextField } from "@material-ui/core";
import NavBar from "../components/header/NavBar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProfileData } from "../redux/actions/userAction";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState(null);
  const [state, setState] = useState(false);
  const profileData = useSelector((state) => state.user.profileData);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const fileTypes = ["jpg", "png", "jpeg", "PNG"];
      const fileType = file.name.split(".")[1];
      if (fileType) {
        setImage(fileReader.result);
        setState(true);
      } else {
        return alert(`please upload a valid file format. (${fileTypes})`);
      }
    };
    fileReader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    const user_image = data.image[0];
    const bio = data.bio;
    const username = data.username;
    const full_name = data.full_name;
    const user_mobile = data.user_mobile;
    const dob = data.dob;
    console.log(data);
    console.log(user_image);
    if (user_image) {
    }
    if (bio) {
    }
    if (username) {
    }
    if (full_name) {
    }
    if (user_mobile) {
    }
    if (dob) {
    }
  };

  useEffect(() => {
    dispatch(getProfileData());
  }, []);
  return (
    <>
      <NavBar />
      <Container>
        <Grid container>
          <Grid md={7} style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Container style={{ marginTop: 20, marginBottom: 20 }}>
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
                    ref={register}
                    onChange={handleChange}
                  />
                  Select Image
                </Button>
                {state && (
                  <img src={image} style={{ height: 500, maxWidth: 500 }} />
                )}
                <TextField
                  name="title"
                  label="Title"
                  fullWidth
                  multiline
                  rows={2}
                  variant="outlined"
                  margin="normal"
                  inputRef={register}
                />
                <TextField
                  name="description"
                  label="Description"
                  margin="normal"
                  fullWidth
                  multiline
                  rows={5}
                  variant="outlined"
                  inputRef={register}
                />

                <Button
                  type="submit"
                  style={{
                    marginTop: 10,
                    marginLeft: 4,
                    width: 200,
                    height: 45,
                    fontSize: 16,
                    backgroundColor: "#323ebe",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  Create
                </Button>
              </form>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateBlog;
