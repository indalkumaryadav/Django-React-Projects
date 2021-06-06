import { Button } from "@material-ui/core";
import styled from "styled-components";

export const LoginButton = styled(Button)`
  margin-top: 20px !important;
  background-color: #1da1f2 !important;
  color: white !important;
  text-transform: capitalize !important;
  font-size: 16px !important;
  height: 48px !important;

  &:hover {
    background-color: #4754e1;
    color: white;
  }
`;
