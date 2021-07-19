import { Drawer, List, makeStyles } from "@material-ui/core";
import {
  HomeRounded,
  PagesRounded,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#1F236F",
    borderRight: "1px solid rgba(0, 0, 0, 0.07)",
  },
  IconWrapper: {
    height: 22,
    width: 22,
    // backgroundColor: "#555892",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "center",
    margin: "0 25px 0 5px",
    "& svg": {
      fontSize: 28,
      fill: "#fff",
    },
  },
  sideBarListItem: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "16px",
    marginRight: "24px",
    marginLeft: "24px",
    fontWeight: 500,
    opacity: 0.65,
    border: 0,
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
      color: "#fff",
    },
  },
}));

const navMenu = [
  {
    label: "Dashboard",
    link: "dashboard-2",
    icon: <HomeRounded />,
  },
  {
    label: "User",
    link: "dashboard-2/user",
    icon: <PagesRounded />,
  },
];

const SidebarMenuItem = (props) => {
  const classes = useStyles();
  const { to, activePath, label, icon } = props;

  return (
    <li>
      <NavLink
        exact
        isActive={
          activePath &&
          ((_, { pathname }) =>
            activePath.some((path) => path === pathname.split("/")[1]))
        }
        to={`/${to}`}
        className={classes.sideBarListItem}
      >
        <div className={classes.IconWrapper}>{icon}</div>
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

const SidebarTwo = () => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {navMenu.map((navItem) => (
          <SidebarMenuItem
            to={navItem.link}
            key={navItem.link}
            activePath={navItem.activePath}
            label={navItem.label}
            icon={navItem.icon}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarTwo;
