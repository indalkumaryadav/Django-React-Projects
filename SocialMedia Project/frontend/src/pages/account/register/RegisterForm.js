import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  Typography,
  IconButton,
} from '@material-ui/core';
import {
  RegisterButton,
  OR,
  GoogleSignInButton,
  FacebookSignInButton,
  LoginAccount,
} from './style';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useHistory } from 'react-router';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert, AlertTitle } from '@material-ui/lab';

const LoginForm = () => {
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleChecked = () => setChecked(!checked);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowCPassword = () => setShowCPassword(!showCPassword);

  const onSubmit = (data) => {
    const username = data.username;
    const email = data.email;
    const password = data.password;
    const c_password = data.confirm_password;
    if (password === c_password) {
      dispatch(registerUser(username, email, password));
    } else {
      alert('password not matched!');
    }
  };

  return (
    <div>
      {auth.error && (
        <Alert
          severity="error"
          style={{
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <AlertTitle>Error</AlertTitle>
          {auth?.error} — <strong>check it out!</strong>
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="username"
          margin="normal"
          fullWidth
          label="Username"
          variant="outlined"
          inputRef={register({
            required: 'username is required',
          })}
          error={Boolean(errors.username)}
          helperText={errors.username?.message}
        />
        <TextField
          name="email"
          margin="normal"
          fullWidth
          label="Email"
          variant="outlined"
          inputRef={register({
            required: 'email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <TextField
          name="password"
          type={showPassword ? 'text' : 'password'}
          margin="normal"
          fullWidth
          label="Password"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            ),
          }}
          inputRef={register({
            required: 'password is required',
            minLength: {
              value: 6,
              message: 'minimum password length should be 6',
            },
          })}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        />
        <TextField
          name="confirm_password"
          type={showCPassword ? 'text' : 'password'}
          margin="normal"
          fullWidth
          label="Confirm Password"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleShowCPassword}>
                {showCPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            ),
          }}
          inputRef={register({
            required: 'confirm password is required',
          })}
          error={Boolean(errors?.confirm_password)}
          helperText={errors?.confirm_password?.message}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <FormControl>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChecked} />}
              label="I agree to the Terms&Condition"
            />
          </FormControl>
        </div>
        {auth.isLoading && (
          <div>
            <CircularProgress />
          </div>
        )}
        <RegisterButton type="submit" fullWidth>
          Sign Up
        </RegisterButton>
      </form>
      <div
        style={{
          marginTop: 20,
        }}
      >
        <Typography variant="subtitle1">
          Already have an Account?{' '}
          <LoginAccount
            onClick={() => {
              history.push('/');
            }}
          >
            Login
          </LoginAccount>
        </Typography>
      </div>

      <OR>or</OR>
      <GoogleSignInButton fullWidth>
        <FcGoogle
          style={{
            marginRight: 20,
            fontSize: 20,
          }}
        />
        Google Sign in
      </GoogleSignInButton>
      <FacebookSignInButton fullWidth>
        <FaFacebook
          style={{
            marginRight: 20,
            fontSize: 22,
            color: 'blue',
          }}
        />
        sign with facebook
      </FacebookSignInButton>
    </div>
  );
};

export default LoginForm;
