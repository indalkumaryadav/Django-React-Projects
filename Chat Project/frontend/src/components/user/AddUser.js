import React from "react";
import { IconButton, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./add_user.css";
import styled from "styled-components";

const AddUserBtn = styled(Button)`
  font-size: 16px !important;
  text-transform: capitalize !important;

  &:hover {
    background-color: purple !important;
    color: white;
    cursor: pointer;
  }
`;

const AddUser = () => {
  return (
    <div className="add_user">
      <AddUserBtn fullWidth>
        <AddIcon /> {" Add User"}
      </AddUserBtn>
    </div>
  );
};

export default AddUser;
