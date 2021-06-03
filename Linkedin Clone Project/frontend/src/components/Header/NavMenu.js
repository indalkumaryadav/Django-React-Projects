import { Typography } from "@material-ui/core";
import { NavMenuDiv } from "./style";
const NavMenu = ({ Icon, title, onClick }) => {
  return (
    <NavMenuDiv onClick={onClick}>
      <Icon />
      <Typography style={{ fontSize: 12 }}>{title}</Typography>
    </NavMenuDiv>
  );
};

export default NavMenu;
