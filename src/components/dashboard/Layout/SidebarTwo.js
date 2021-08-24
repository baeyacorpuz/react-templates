import { Button, Divider, Typography } from "@material-ui/core";
import { Drawer, Hidden, List, makeStyles } from "@material-ui/core";
import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

import Templated from "../../../assets/images/coral_name.png";
import { menuList } from "../../../utils/menuData";

const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  logo: {
    width: 100,
    margin: "8px 20px 8px 30px"
  },
  side: {
    height: "-webkit-fill-available",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sideBarListItem: {
    padding: "12px 20px 11px 40px",
    display: 'block',
    opacity: 0.65,
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    transition: 'opacity 0.3s ease',
    '&[disabled]': {
      pointerEvents: 'none',
    },
    '&.active, &:hover': {
      opacity: 1,
    },
    '&.active, &:focus': {
      outline: 1,
    },
    '& span': {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1,
    },
  },
  subList: {
    margin: "8px 20px 8px 40px"
  },
  listItem: {
    "& .active, &:focus": {
      backgroundColor: "beige",
      color: "coral"
    },
    '& .active': {
      backgroundColor: "beige",
      color: "coral",
      borderRight: "3px solid coral"
    },
    "&:hover": {
      backgroundColor: "#F2F2F0",
    }
  }
}));

const SidebarTwo = ({ mobileOpen, handleDrawerToggle }) => {
  const classes = useStyles();

  const handleLogout = async () => {
    localStorage.clear("token")
    window.location.reload();
  }

  const drawer = (
    <div className={classes.side}>
      <div>
        <div className={classes.logoWrapper}>
          <Link to={"/d/home"}>
            <img className={classes.logo} src={Templated} alt="template logo" />
          </Link>
        </div>
        <List>
          <Divider />
          {menuList.map((list) => (
            <Fragment key={list.key}>
              <li key={list.key}>
                <Typography className={classes.subList} variant="overline">{list.label}</Typography>
                {list.items.map((item) => (
                  <Fragment key={item.key}>
                    <li key={item.key} className={classes.listItem}>
                      <NavLink
                        exact
                        to={`${item.key}`}
                        isActive={
                          item.activePath &&
                          ((_, { pathname }) => item.activePath.some((path) => pathname.includes(path)))
                        }
                        className={classes.sideBarListItem}
                        activeClassName="active"
                      >
                        <Typography variant="h6">{item.label}</Typography>
                      </NavLink>
                    </li>
                  </Fragment>
                ))}
              </li>
            </Fragment>
          ))}
        </List>
      </div>
      <div>
        <Button fullWidth color="primary" onClick={() => handleLogout()} variant="text">Logout</Button>
      </div>
    </div >
  );

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SidebarTwo;
