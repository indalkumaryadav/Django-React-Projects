import { IconButton, Paper, Typography, Menu, MenuItem, Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import PopUp from '../common/PopUp';
import EditPost from './EditPost';
import { deleteUserPost, loadPost } from '../../redux/actions/postAction';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const StyledMenuItem = withStyles((theme) => ({}))(MenuItem);

const Img = styled.img`
  width: 100%;
  height: 300px;
`;

const PostCard = ({ postId, post, title, image }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = React.useState(false);

  const currentUserPost = useSelector((state) => state.post.post.current_user_post);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    post?.filter((item) => {
      currentUserPost?.filter((data) => {
        if (item.id === data.id) {
          setState(true);
        }
      });
    });
  }, []);

  return (
    <>
      <Paper>
        {state && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          </div>
        )}
        <Img src={image} />
        <Container>
          <Typography
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </Typography>
        </Container>
      </Paper>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem
          onClick={() => {
            handleClose();
            setOpen(true);
          }}
        >
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit Post" />
        </StyledMenuItem>

        <StyledMenuItem
          onClick={() => {
            handleClose();
            setOpenDialog(true);
          }}
        >
          <ListItemIcon>
            <DeleteIcon fontSize="small" style={{ color: 'red' }} />
          </ListItemIcon>
          <ListItemText primary="Delete Post" />
        </StyledMenuItem>
      </Menu>
      {/* edit Post */}
      <PopUp title="Edit Post" open={open} setOpen={setOpen}>
        <EditPost setOpen={setOpen} postId={postId} title={title} image={image} />
      </PopUp>
      {/*  */}
      <Dialog
        open={openDialog}
        onClose={() => {
          setOpenDialog(false);
        }}
      >
        <DialogTitle>{'Warning?'}</DialogTitle>
        <DialogContent style={{ width: 400 }}>
          <DialogContentText>are you sure you want to delete?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDialog(false);
            }}
          >
            Cencel
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              dispatch(deleteUserPost(postId));
              dispatch(loadPost());
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      {/*  */}
    </>
  );
};

export default PostCard;
