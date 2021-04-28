import React, { useState } from "react";
import PropTypes from "prop-types";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { purple, green } from "@material-ui/core/colors";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
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
const RegisterForm = () => {
  const history = useHistory();
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const handleChecked = () => setChecked(!checked);
  const handleChange = (event) => {
    console.log(event.target.checked);
    setChecked();
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
        Sign up.
      </Typography>
      <Typography
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quae.
      </Typography>
      <TextField
        margin="normal"
        fullWidth
        label="Username"
        variant="outlined"
      />
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
          Create Account
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
            marginTop: 10,
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

        <div
          style={{
            marginTop: 25,
          }}
        >
          <Button
            onClick={() => {
              history.push("/login");
            }}
            variant="contained"
            className={classes.signUpButton}
          >
            Login Now
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
