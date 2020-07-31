import React, { useState, useImperativeHandle } from "react";
import PasswordForgetForm from "./PasswordForgetForm";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PasswordForgetPage = React.forwardRef((props, ref) => {
  const [openPasswordForget, setOpenPasswordForget] = useState(false);

  useImperativeHandle(ref, () => ({
    openPasswordForget() {
      setOpenPasswordForget(true);
    },
  }));

  const closePasswordForget = () => {
    setOpenPasswordForget(false);
  };

  return (
    <Dialog
      fullScreen
      disableEscapeKeyDown
      open={openPasswordForget}
      onClose={closePasswordForget}
      TransitionComponent={Transition}
    >
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={closePasswordForget}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <PasswordForgetForm />
      </DialogContent>
    </Dialog>
  );
});

export default PasswordForgetPage;
