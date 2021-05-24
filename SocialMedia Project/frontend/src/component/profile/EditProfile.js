import { Avatar, Button, IconButton, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileById, loadProfile, updateUserProfile } from '../../redux/actions/userAction';
import PopUp from '../common/PopUp';
import { useForm } from 'react-hook-form';

const EditProfile = ({ open, setOpen }) => {
  const [image, setImage] = useState(null);
  const { register, handleSubmit } = useForm();
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.profile);
  const userId = currentUser.id;

  const handleChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const fileTypes = ['jpg', 'png', 'jpeg', 'PNG'];
      const fileType = file.name.split('.')[1];
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
    const bio = data.bio;
    console.log(data);
    const formData = new FormData();
    if (data.image[0]) {
      formData.append('user_image', data.image[0]);
      dispatch(updateUserProfile(userId, formData));
      dispatch(loadProfile(userId, formData));
      dispatch(getUserProfileById(userId));
      setOpen(false);
    } else if (data.dob) {
      formData.append('dob', data.dob);
      dispatch(updateUserProfile(userId, formData));
      dispatch(loadProfile(userId, formData));
      dispatch(getUserProfileById(userId));
      setOpen(false);
    } else if (data.user_mobile) {
      formData.append('user_mobile', data.user_mobile);
      dispatch(updateUserProfile(userId, formData));
      dispatch(loadProfile(userId, formData));
      dispatch(getUserProfileById(userId));
      setOpen(false);
    } else if (bio) {
      console.log(data.bio);
    }
  };

  return (
    <>
      <PopUp title="Edit Profile" open={open} setOpen={setOpen}>
        <div
          style={{
            width: 600,
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton
                component="label"
                style={{
                  textTransform: 'capitalize',
                }}
                onChange={handleChange}
              >
                <input name="image" type="file" hidden onChange={handleChange} ref={register} />

                {state ? (
                  <Avatar src={image} style={{ width: 250, height: 250 }} />
                ) : (
                  <Avatar
                    src={currentUser?.profile?.user_image}
                    style={{ width: 250, height: 250 }}
                  />
                )}
              </IconButton>
            </div>
            <TextField
              fullWidth
              name="bio"
              margin="normal"
              variant="outlined"
              label="Bio"
              inputRef={register}
              defaultValue={currentUser?.profile?.bio}
            />
            <TextField
              fullWidth
              name="username"
              margin="normal"
              variant="outlined"
              label="Username"
              inputRef={register}
              defaultValue={currentUser?.username}
            />
            <TextField
              fullWidth
              name="full_name"
              margin="normal"
              variant="outlined"
              label="Full Name"
              inputRef={register}
              defaultValue={currentUser?.full_name || 'indal kumar'}
            />
            <TextField
              fullWidth
              type="number"
              name="user_mobile"
              margin="normal"
              variant="outlined"
              label="Mobile No."
              inputRef={register}
              defaultValue={currentUser?.profile?.user_mobile || 9507509624}
            />
            <TextField
              fullWidth
              type="date"
              name="dob"
              margin="normal"
              variant="outlined"
              label="DOB"
              inputRef={register}
              defaultValue={currentUser?.profile?.dob || '2017-05-24'}
            />
            <Button
              type="submit"
              fullWidth
              style={{
                textTransform: 'capitalize',
                backgroundColor: 'red',
                color: 'white',
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              Update
            </Button>
          </form>
        </div>
      </PopUp>
    </>
  );
};

export default EditProfile;
