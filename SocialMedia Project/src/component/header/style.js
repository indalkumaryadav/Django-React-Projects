import styled from "styled-components";
import { Button } from "@material-ui/core";

export const MainDiv = styled.div`
  height: 60px;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
`;
export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #e6e6e6;
  height: 40px;
  padding: 10px;
  border-radius: 25px;
`;
export const SearchInput = styled.input`
  width: 300px;
  outline: none;
  padding: 10px;
  font-size: 16px;
  background: transparent;
  border: none;
`;
export const CreatePostButton = styled(Button)`
  border-radius: 20px !important;
  text-transform: capitalize !important;
  background-color: red !important;
  padding: 8px 20px !important;
  color: white !important;
`;
