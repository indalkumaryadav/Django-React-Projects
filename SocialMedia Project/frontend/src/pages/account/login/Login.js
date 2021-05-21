import React, { useEffect } from "react";
import { Image, LoginDiv, Title, LeftContainer, RightContainer } from "./style";
import LoginForm from "./LoginForm";
import AuthSvg from "../../../images/auth.svg";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      return history.push("/");
    }
  }, []);

  return (
    <LoginDiv>
      <LeftContainer>
        <Title>Login</Title>
        <LoginForm />
      </LeftContainer>

      <RightContainer>
        <Image src={AuthSvg} />
      </RightContainer>
    </LoginDiv>
  );
};

export default Login;
