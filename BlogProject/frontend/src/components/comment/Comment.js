import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Comment = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div style={{ marginTop: 20, display: "flex", alignItems: "flex-start" }}>
        <IconButton>
          <Avatar
            onClick={() => {
              history.push("/username");
            }}
          />
        </IconButton>
        <Card>
          <Container
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: 2,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginTop: 10,
              }}
            >
              <Typography style={{ marginLeft: 10 }}>Indal</Typography>
              <Typography style={{ marginLeft: 10 }}>.</Typography>
              <Typography style={{ marginLeft: 10 }}>May 20</Typography>
            </div>
            <IconButton onClick={handleClick}>
              <MoreHorizIcon />
            </IconButton>
          </Container>
          <CardContent>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae iusto velit est veritatis eum explicabo exercitationem
              dolores obcaecati at saepe fugit blanditiis eos deleniti, rem a
              optio, quibusdam officia aliquid.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div style={{ width: 150 }}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </div>
      </Menu>
    </>
  );
};

export default Comment;
