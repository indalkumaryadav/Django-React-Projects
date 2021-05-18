import React from "react";
import { Container, Typography } from "@material-ui/core";
import styled from "styled-components";

const OptionDiv = styled(Container)`
  display: flex !important;
  padding: 10px;
  margin-top: 10px;
  &:hover {
    transition: 0.2s ease;
    background-color: red;
    cursor: pointer;
    color: white;
  }
`;
const Title = styled(Typography)`
  margin-left: 20px !important;
`;

const SideBarOption = ({ Icon, title, onClick }) => {
  return (
    <OptionDiv onClick={onClick}>
      <Icon />
      <Title>{title}</Title>
    </OptionDiv>
  );
};

export default SideBarOption;
