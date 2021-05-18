import styled from "styled-components";
import { Paper, Button } from "@material-ui/core";

export const MainDiv = styled(Paper)`
  width: 750px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
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
  height: 100%;
`;

export const LoginAccount = styled.a`
  color: #4f3cc9;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  cursor: pointer;
`;
export const SubmitButton = styled(Button)`
  color: white !important;
  border: 1px solid gray;
  margin-top: 20px !important;
  text-transform: capitalize !important;
  border-radius: 50px !important;
  height: 45px;
  font-size: 16px !important;
  background-color: #4f3cc9 !important;
`;
