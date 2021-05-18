import React from "react";
import Form from "./Form";
import { Image, MainDiv, Title, LeftContainer, RightContainer } from "./style";
import AuthSvg from "../../../images/auth.svg";

const ForgetPassword = () => {
  return (
    <MainDiv>
      <LeftContainer>
        <Title>Forget Password</Title>
        <Form />
      </LeftContainer>
      <RightContainer>
        <Image src={AuthSvg} />
      </RightContainer>
    </MainDiv>
  );
};

export default ForgetPassword;
