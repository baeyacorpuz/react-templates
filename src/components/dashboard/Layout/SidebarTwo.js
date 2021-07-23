import { Drawer, Hidden, List, makeStyles } from "@material-ui/core";
import {
  HomeRounded,
  PermIdentity,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

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
  IconWrapper: {
    height: 22,
    width: 22,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "center",
    margin: "0 25px 0 5px",
    "& svg": {
      fontSize: 28,
      fill: "#41B67F",
    },
  },
  sideBarListItem: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "16px",
    marginRight: 24,
    marginLeft: 24,
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
      color: "#41B67F",
    },
  },
}));

const navMenu = [
  {
    label: "Dashboard",
    link: "dashboard/home",
    icon: <HomeRounded />,
  },
  {
    label: "User",
    link: "dashboard/user",
    icon: <PermIdentity />,
  },
  {
    label: "Ecommerce",
    link: "dashboard/ecommerce/products",
    icon: <ShoppingCartOutlined />,
    activePath: [
      "dashboard/ecommerce/products",
      "dashboard/ecommerce/create",
      "dashboard/ecommerce/product",
      "dashboard/ecommerce/category",
      "dashboard/ecommerce/tag",
    ],
  },
];

const SidebarMenuItem = (props) => {
  const classes = useStyles();
  const { to, activePath, label, icon } = props;

  return (
    <li>
      <NavLink
        exact
        // isActive={
        //   activePath &&
        //   ((_, { pathname }) =>
        //     activePath.some((path) => path === pathname.split("/")[1]))
        // }
        isActive={
          activePath && ((_, { pathname }) => activePath.some((path) => pathname.includes(path)))
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

const SidebarTwo = ({ mobileOpen, handleDrawerToggle }) => {
  const classes = useStyles();

  const drawer = (
    <>
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
    </>
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
