import React from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { motion } from "framer-motion";
const MenuDiv = styled.div`
  height: 100vh;
  width: 18%;
  right: 0;
  top: 0;
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
  color: white;
  position: fixed;
  z-index: 1000;
  margin-top: 59px;
`;

const Menu = () => {
  return (
    <MenuDiv>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
    </MenuDiv>
  );
};

export default Menu;
