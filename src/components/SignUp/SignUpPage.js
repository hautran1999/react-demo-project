import React, { useState, useImperativeHandle } from "react";
import SignUpForm from "./SignUpForm";

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

const SignUpPage = React.forwardRef((props, ref) => {
  const [openSignUp, setOpenSignUp] = useState(false);

  useImperativeHandle(ref, () => ({
    openSignUp() {
      setOpenSignUp(true);
    },
  }));

  const closeSignUp = () => {
    setOpenSignUp(false);
  };

  return (
    <Dialog
      fullScreen
      disableEscapeKeyDown
      open={openSignUp}
      onClose={closeSignUp}
      TransitionComponent={Transition}
    >
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={closeSignUp}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <SignUpForm />
      </DialogContent>
    </Dialog>
  );
});

export default SignUpPage;
