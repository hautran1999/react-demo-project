import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  link: {
    color: "#000",
    textDecoration: "none",
  },
}));

const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText>
            <Link className={classes.link} to={ROUTES.LANDING}>
              Landing
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link className={classes.link} to={ROUTES.HOME}>
              Home
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link className={classes.link} to={ROUTES.ACCOUNT}>
              Account
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link className={classes.link} to={ROUTES.ADMIN}>
              Admin
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default Menu;
