import React, { useRef, useState } from "react";

import Menu from "./Menu";
import SignInPage from "../SignIn/SignInPage";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = (props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const signInRef = useRef();

  const handleOpenSignIn = () => {
    signInRef.current.openSignIn();
  };

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SwipeableDrawer
            anchor={"left"}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Menu />
          </SwipeableDrawer>

          <Typography variant="h6" className={classes.title}>
            Demo
          </Typography>
          {props.user ? (
            <Button color="inherit">{props.user.displayName}</Button>
          ) : (
            <Button color="inherit" onClick={handleOpenSignIn}>
              Sign In
            </Button>
          )}

          <SignInPage ref={signInRef} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
