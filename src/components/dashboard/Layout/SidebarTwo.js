import { Divider, ListItemIcon, Typography } from "@material-ui/core";
import { Drawer, Hidden, List, ListItem, Collapse, makeStyles } from "@material-ui/core";
import { ArrowDropDown, ArrowRight } from "@material-ui/icons";
import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

import Templated from "../../../assets/images/coral_name.png";
import { menuList, mockData } from "../../../utils/menuData";

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
    margin: "16px 8px 8px 30px;"
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
  },
  muiList: {
    "& .MuiList-padding": {
      paddingTop: "0px !important"
    }
  },
  logoutButton: {
    cursor: "pointer",
    padding: "12px 0px",
    "&:hover": {
      backgroundColor: "#F2F2F0",
    }
  },
  parentList: {
    paddingLeft: 24,
  },
  childList: {
    paddingLeft: 30,
  },
  parentActive: {
    "&.MuiListItem-root.active": {
      backgroundColor: "beige",
      color: "coral",
      borderRight: "3px solid coral",
      "&.MuiListItemIcon-root": {
        minWidth: "30px !important"
      },
      "& .MuiListItemIcon-root": {
        color: "coral"
      }
    },
    "&.MuiListItem-button": {
      display: "flex",
      alignContent: "center",
      justifyContent: "space-between"
    },
    "& .MuiListItemIcon-root": {
      minWidth: "30px !important",
      marginTop: "-1px",
    },
    borderRight: "3px solid transparent",
  },
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
  console.log(window.location.pathname)

  const drawer = (
    <div className={classes.side}>
      <div className={classes.muiList}>
        <div className={classes.logoWrapper}>
          <a href="/">
            <img className={classes.logo} src={Templated} alt="template logo" />
          </a>
        </div>
        <List>
          <Divider />
          {menuList.map((list, index) => (
            <Fragment key={index}>
              <li key={list.key}>
                <Typography className={classes.subList} variant="overline">{list.label}</Typography>
                <List>
                  {list.items.map((item, index) => (
                    <Fragment key={index}>
                      <li key={item.key} className={classes.listItem}>
                        <NavLink
                          exact
                          to={`/d/${item.key}`}
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
                </List>
              </li>
            </Fragment>
          ))}
        </List>
        <Divider />
        <List>
          {mockData.map((list, index) => (
            <Fragment key={index}>
              <li>
                <Typography className={classes.subList} variant="overline">{list.label}</Typography>
                <List>
                  {list.items.map((item, index) => (
                    <>
                      {item.items ? (
                        <>
                          <ListItem button onClick={handleClick} className={window.location.pathname.includes(`/d/${item.key}/`) ? classes.parentActive + " active" : classes.parentActive + " null"}>
                            <Typography className={classes.parentList} variant="overline">{item.label}</Typography>
                            <ListItemIcon>
                              {open ? <ArrowDropDown /> : <ArrowRight />}
                            </ListItemIcon>
                          </ListItem>
                          {item.items.map((nested, index) => (
                            <Fragment key={index}>
                              <Collapse in={open}>
                                <li className={classes.childList}>
                                  <NavLink
                                    exact
                                    to={`/d/${item.key}/${nested.key}`}
                                    isActive={
                                      item.activePath &&
                                      ((_, { pathname }) => item.activePath.some((path) => pathname.includes(path), console.log(pathname)))
                                    }
                                    className={classes.sideBarListItem}
                                    activeClassName="active"
                                  >
                                    <Typography variant="h6">• {nested.label}</Typography>
                                  </NavLink>
                                </li>
                              </Collapse>
                            </Fragment>
                          ))}
                        </>
                      ) : (
                        <Fragment key={index}>
                          <li className={classes.listItem}>
                            <NavLink
                              exact
                              to={`/d/${item.key}`}
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
                      )}
                    </>
                  ))}
                </List>
              </li>
            </Fragment>
          ))}
        </List>
      </div>
      <div className={classes.logoutButton}>
        <Typography onClick={handleLogout} variant="overline" variantMapping={{ h6: "h6" }} color="primary" className={classes.subList}>Logout</Typography>
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
