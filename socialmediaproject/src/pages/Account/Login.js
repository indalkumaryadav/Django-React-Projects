import React from "react";
import { Container, Paper, Box, makeStyles, Grid } from "@material-ui/core";
import AuthSvg from "../../images/auth.svg";
import { ImageContainer } from "./style";
import LoginForm from "./LoginForm";
import { Helmet } from "react-helmet";

const TITLE = "My Page Title";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "flex",
    marginTop: 10,
    width: 1000,
    height: 600,
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Container className={classes.container}>
        <Paper>
          <Grid
            container
            style={{
              padding: 10,
            }}
          >
            <Grid item md={5} sm={12} xs={12}>
              <LoginForm />
            </Grid>
            <Grid item md={7} sm={12} xs={12}>
              <ImageContainer src={AuthSvg} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Login;
