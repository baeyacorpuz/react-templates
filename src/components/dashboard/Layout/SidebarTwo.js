import { Collapse, Divider, Typography } from "@material-ui/core";
import { Button, Drawer, Hidden, List, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import Templated from "../../../assets/images/templated.png";
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
    width: 70,
  },
  side: {
    height: "-webkit-fill-available",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  itemWrapper: {
    width: 230,
    margin: "0 auto",
    paddingBottom: 24
  },
  link: {
    background: "transparent",
    cursor: "pointer",
    transition: "opacity 0.3s ease",
    "&[disabled]": {
      pointerEvents: "none",
    },
    "&.active, &:hover": {
      opacity: 1,
    },
    "&.active, &:focus": {
      outline: 1,
    },
    "& span": {
      fontSize: 14,
      lineHeight: 1,
      color: "#435e93",
    },
    textTransform: "uppercase"
  },
  logoutButton: {
    margin: "0 auto",
    width: 240,
    "& .MuiButton-label": {
      display: "flex",
      justifyContent: "flex-start"
    },
    "& .MuiButton-textPrimary:hover": {
      backgroundColor: "transparent"
    }
  },
  collapsItem: {
    paddingLeft: 40
  }
}));

const SidebarTwo = ({ mobileOpen, handleDrawerToggle }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleLogout = async () => {
    localStorage.clear("token")
    window.location.reload();
  }

  const handleClick = () => {
    setOpen(!open)
  }

  const drawer = (
    <div className={classes.side}>
      <div>
        <div className={classes.logoWrapper}>
          <Link to={"/d/home"}>
            <img className={classes.logo} src={Templated} alt="template logo" />
          </Link>
        </div>
        <Divider />
        <List>
          {menuList.map((value) => (
            <div key={value.label} className={classes.itemWrapper}>
              <Typography variant="overline" color="textSecondary">{value.label}</Typography>
              {value.items.map((item) => (
                item.items ? (
                  <li key={item.key}>
                    <div className={classes.link} onClick={handleClick}>
                      <span>{item.label}</span>
                    </div>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List>
                        {item.items.map((nested) => (
                          <li key={nested.key} className={classes.collapsItem}>
                            <NavLink
                              exact
                              to={`/d/books/${nested.key}`}
                              className={classes.link}
                            >
                              <span>{nested.label}</span>
                            </NavLink>
                          </li>
                        ))}
                      </List>
                    </Collapse>
                  </li>
                ) : (
                  <li key={item.key}>
                    <NavLink
                      exact
                      isActive={
                        value.activePath &&
                        ((_, { pathname }) =>
                          value.activePath.some((path) => pathname.includes(path)))
                      }
                      to={`/d/${item.key}`}
                      className={classes.link}
                    >
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                )
              ))}
            </div>
          ))}
        </List>
      </div>
      <div className={classes.logoutButton}>
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
