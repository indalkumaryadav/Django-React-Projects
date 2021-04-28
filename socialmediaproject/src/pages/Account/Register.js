import React from "react";
import { Container, Paper, Box, makeStyles, Grid } from "@material-ui/core";
import AuthSvg from "../../images/auth.svg";
import { ImageContainer } from "./style";
import RegisterForm from "./RegisterForm";
const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "flex",
    width: 1000,
    height: 600,
    marginTop: 10,
  },
}));
const Register = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Paper>
        <Grid
          container
          style={{
            padding: 10,
          }}
        >
          <Grid item md={7} sm={12} xs={12}>
            <ImageContainer src={AuthSvg} />
          </Grid>
          <Grid item md={5} sm={12} xs={12}>
            <RegisterForm />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Register;
