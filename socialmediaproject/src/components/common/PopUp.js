import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

const PopUp = ({ children, open, setOpen, onClose, title }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default PopUp;
