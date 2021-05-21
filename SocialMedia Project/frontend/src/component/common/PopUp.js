import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { motion } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(0),
  },
}));

const PopUp = (props) => {
  const classes = useStyles();
  const { title, children, open, setOpen } = props;
  return (
    <Dialog
      open={open}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
      onClose={() => {
        setOpen();
        setOpen(false);
      }}
    >
      <DialogTitle>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>{title}</div>
          <div>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
              <IconButton
                style={{
                  backgroundColor: "red",
                  color: "white",
                }}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <ClearIcon fontSize="large" />
              </IconButton>
            </motion.div>
          </div>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default PopUp;
