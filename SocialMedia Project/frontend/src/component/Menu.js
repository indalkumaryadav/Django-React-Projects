import React, { useState } from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloseIcon from '@material-ui/icons/Close';
import { Container, IconButton } from '@material-ui/core';
import { logout } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

const MenuDiv = styled.div`
  display: flex;
  height: 100vh;
  width: 18%;
  right: 0;
  top: 0;
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
  color: white;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  z-index: 9999;
`;

const Menu = ({ openMenu, setOpenMenu }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState();
  const handleState = () => {
    setState(!state);
  };
  return (
    <MenuDiv>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: 10,
          }}
        >
          <IconButton
            style={{
              color: 'white',
            }}
            onClick={() => setOpenMenu(false)}
          >
            <CloseIcon />
          </IconButton>
        </div>
        {/* switcher */}
        {/* <Container>
          <Switch onClick={handleState} checked={state} />
        </Container> */}
      </div>
      <div>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem
            button
            onClick={() => {
              dispatch(logout());
            }}
          >
            <ListItemIcon>
              <ExitToAppIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    </MenuDiv>
  );
};

export default Menu;
