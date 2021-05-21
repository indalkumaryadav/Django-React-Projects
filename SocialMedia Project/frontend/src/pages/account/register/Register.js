import React, { useEffect } from "react";
import {
  Image,
  RegisterDiv,
  Title,
  LeftContainer,
  RightContainer,
} from "./style";
import LoginForm from "./RegisterForm";
import AuthSvg from "../../../images/auth.svg";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      return history.push("/");
    }
  }, []);
  return (
    <RegisterDiv>
      <LeftContainer>
        <Title>Create an Account</Title>
        <LoginForm />
      </LeftContainer>
      <RightContainer>
        <Image src={AuthSvg} />
      </RightContainer>
    </RegisterDiv>
  );
};

export default Register;
