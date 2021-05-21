import {
  IconButton,
  Paper,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const StyledMenuItem = withStyles((theme) => ({}))(MenuItem);

const Img = styled.img`
  width: 100%;
  height: 300px;
`;

const PostCard = ({ title, image }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Paper>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        </div>
        <Img src={image} />
        <Typography>{title}</Typography>
      </Paper>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit Post" />
        </StyledMenuItem>

        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" style={{ color: "red" }} />
          </ListItemIcon>
          <ListItemText primary="Delete Post" />
        </StyledMenuItem>
      </Menu>
    </>
  );
};

export default PostCard;
