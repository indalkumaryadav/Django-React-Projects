import React, { useState } from "react";
import PropTypes from "prop-types";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { purple, green } from "@material-ui/core/colors";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { FcGoogle } from "react-icons/fc";
import {
  TextField,
  Button,
  makeStyles,
  Checkbox,
  IconButton,
  FormControl,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { login } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  loginButton: {
    width: 250,
    backgroundColor: purple[500],
    color: "white",
    textTransform: "capitalize",
    marginTop: 20,
    fontSize: 16,
    "&:hover": {
      backgroundColor: green[500],
    },
  },
  signUpButton: {
    borderRadius: 25,
    padding: 10,
    width: 150,
    textTransform: "capitalize",
    border: "2px solid purple",
    backgroundColor: "white",
    fontSize: 16,
    "&:hover": {
      backgroundColor: purple[500],
      color: "white",
    },
  },
}));

const LoginForm = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const handleChecked = () => setChecked(!checked);
  const handleChange = (event) => {
    console.log(event.target.checked);
    setChecked();
  };
  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    dispatch(login(email, password));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        variant="h5"
        style={{
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Log in.
      </Typography>
      <Typography
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        login with your data that you entered during yuor registration.
      </Typography>
      <TextField
        name="email"
        margin="normal"
        fullWidth
        label="Email"
        variant="outlined"
        inputRef={register}
      />
      <TextField
        name="password"
        margin="normal"
        fullWidth
        label="Password"
        variant="outlined"
        type="password"
        inputRef={register}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleChange}>
              <VisibilityOffIcon />
            </IconButton>
          ),
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          type="submit"
          className={classes.loginButton}
          variant="contained"
          size="large"
        >
          Login
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginTop: 4,
            marginBottom: 4,
          }}
        >
          <FormControl>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={handleChecked} />}
              label="Remeber me"
            />
          </FormControl>
        </div>
        <div>
          <a
            style={{
              color: "purple",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: 4,
            }}
            onClick={() => alert("clicked")}
          >
            Forget Password?
          </a>
        </div>
        <div
          style={{
            marginTop: 25,
          }}
        >
          <Button
            onClick={() => {
              history.push("/register");
            }}
            variant="contained"
            className={classes.signUpButton}
          >
            Sign Up Now
          </Button>
        </div>
        <Typography style={{ marginTop: 15 }}>OR</Typography>
        {/* google */}
        <Button
          fullWidth
          style={{
            backgroundColor: "white",
            border: "1px solid gray",
            marginTop: 20,
            textTransform: "capitalize",
          }}
        >
          <FcGoogle
            style={{
              marginRight: 20,
              fontSize: 20,
            }}
          />
          Sign in with google
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
