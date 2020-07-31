import React, { useState, useImperativeHandle } from "react";
import SignIn from "../../containers/SignIn";

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

const SignInPage = React.forwardRef((props, ref) => {
  const [openSignIn, setOpenSignIn] = useState(false);

  useImperativeHandle(ref, () => ({
    openSignIn() {
      setOpenSignIn(true);
    },
  }));

  const closeSignIn = () => {
    setOpenSignIn(false);
  };

  return (
    <Dialog
      fullScreen
      disableEscapeKeyDown
      open={openSignIn}
      onClose={closeSignIn}
      TransitionComponent={Transition}
    >
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={closeSignIn}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <SignIn close={closeSignIn} />
      </DialogContent>
    </Dialog>
  );
});

export default SignInPage;
