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
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "../../redux/actions/userAction";

const Comment = ({ username, email, content, userImage }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const profileData = useSelector((state) => state.user.profileData);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(getProfileData());
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          marginTop: 20,
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <IconButton>
          <Avatar src={userImage} onClick={() => {}} />
        </IconButton>
        <Card style={{ width: "100%" }}>
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
              <Typography style={{ marginLeft: 10 }}>
                {username || email}
              </Typography>
              <Typography style={{ marginLeft: 10 }}>.</Typography>
              <Typography style={{ marginLeft: 10 }}></Typography>
            </div>

            {localStorage.getItem("token") &&
              username === profileData?.username && (
                <IconButton onClick={handleClick}>
                  <MoreHorizIcon />
                </IconButton>
              )}
          </Container>
          <CardContent>
            <Typography>{content}</Typography>
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
