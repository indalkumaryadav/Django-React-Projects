import styled from "styled-components";
import { Paper, Button } from "@material-ui/core";

export const LoginDiv = styled(Paper)`
  width: 900px;
  height: 600px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 42%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  padding: 10px;
`;
export const RightContainer = styled.div`
  background-color: #4f3cc9;
  width: 50%;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const Title = styled.p`
  font-size: 25px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 100%;
`;
export const ForgetPassword = styled.a`
  color: #4f3cc9;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  cursor: pointer;
`;
export const CreateAccount = styled.a`
  color: #4f3cc9;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  cursor: pointer;
`;
export const LoginButton = styled(Button)`
  color: white !important;
  border: 1px solid gray;
  margin-top: 20px !important;
  text-transform: capitalize !important;
  border-radius: 50px !important;
  height: 45px;
  font-size: 16px !important;
  background-color: #4f3cc9 !important;
`;

export const OR = styled.p`
  display: flex;
  margin-top: 20px;
  font-family: Roboto, sans-serif;
  &::after {
    color: white;
    content: "";
    flex: 1;
    border-bottom: groove 2px;
    margin: auto 0.25em;
    box-shadow: 0 -1px;
  }
  &::before {
    color: white;
    content: "";
    flex: 1;
    border-bottom: groove 2px;
    margin: auto 0.25em;
    box-shadow: 0 -1px;
  }
`;

export const GoogleSignInButton = styled(Button)`
  border: 1px solid gray !important;
  margin-top: 20px !important;
  text-transform: capitalize !important;
  border-radius: 50px !important;
  height: 45px;
  font-size: 16px !important;
  background-color: white !important;
`;

export const FacebookSignInButton = styled(Button)`
  border: 1px solid gray !important;
  margin-top: 20px !important;
  text-transform: capitalize !important;
  border-radius: 50px !important;
  height: 45px;
  font-size: 16px !important;
  background-color: white !important;
`;
