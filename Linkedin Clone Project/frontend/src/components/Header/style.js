import { Container } from "@material-ui/core";
import styled from "styled-components";

export const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  background-color: rgba(238, 243, 248, 1);
  border: none;
  border-radius: 4px;
  color: rgba(23, 97, 169, 1);
`;

export const NavContainer = styled(Container)`
  width: 1128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
`;
export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const RightDiv = styled.div`
  display: flex;
`;
export const NavMenuDiv = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 30px;
  flex-direction: column;
  color: black;
`;
