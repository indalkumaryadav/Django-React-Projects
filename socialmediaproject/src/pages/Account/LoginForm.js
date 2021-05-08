import React, { useState } from "react";
import PropTypes from "prop-types";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { purple, green } from "@material-ui/core/colors";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook, GrTwitter } from "react-icons/gr";
import FacebookLogin from "react-facebook-login";
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
import axios from "axios";

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
  const history = useHistory();
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const handleChecked = () => setChecked(!checked);
  const handleChange = (event) => {
    console.log(event.target.checked);
    setChecked();
  };

  const facebookLogin = (accessToken) => {
    axios
      .post("http://127.0.0.1:8000/auth/convert-token/", {
        token: accessToken,
        backend: "facebook",
        grant_type: "convert_token",
        client_id: "Jvh1xtu7bAI8dIyQnYenpb6Jxk5krloDfHGKjzkn",
        client_secret:
          "LCHVgKDs9LGZIlL7mK84vvipPfYXBfWQ4gwKCYggjaXmCRHLwMCzBEo4d1BDNMnE7zCaRj8QXbd5IRBLxx1uKvs1JUM3sRYqG25Nqj7S7OGuoKbNztv5MKvPwk8nydG7",
      })
      .then((res) => console.log(res));
  };

  const responseFacebook = (response) => {
    console.log(response);
    facebookLogin(response.accessToken);
  };
  return (
    <form>
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
      <TextField margin="normal" fullWidth label="Email" variant="outlined" />
      <TextField
        margin="normal"
        fullWidth
        label="Password"
        variant="outlined"
        type="password"
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

        <FacebookLogin
          appId="478879533312384"
          // autoLoad={true}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
        />
      </div>
    </form>
  );
};

export default LoginForm;
