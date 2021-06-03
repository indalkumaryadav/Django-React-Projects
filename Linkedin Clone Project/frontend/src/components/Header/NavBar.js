import {
  AppBar,
  Avatar,
  Button,
  Container,
  Divider,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import { SearchInput, NavContainer, LeftDiv, RightDiv } from "./style";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HomeIcon from "@material-ui/icons/Home";
import NavMenu from "./NavMenu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  return (
    <AppBar
      position="static"
      elevation={1}
      style={{
        height: 52,
        backgroundColor: "white",
      }}
    >
      <NavContainer>
        <LeftDiv>
          <LinkedInIcon style={{ color: "blue", fontSize: 42 }} />
          <form>
            <SearchInput placeholder="search" />
          </form>
        </LeftDiv>
        <RightDiv>
          <NavMenu
            onClick={() => history.push("/")}
            Icon={HomeIcon}
            title="Home"
          />
          <NavMenu Icon={MessageIcon} title="Message" />
          <NavMenu Icon={NotificationsIcon} title="Notifications" />
          <NavMenu
            onClick={() => history.push("/username")}
            Icon={AccountCircleIcon}
            title="Profile"
          />
        </RightDiv>
      </NavContainer>
    </AppBar>
  );
};

export default NavBar;
