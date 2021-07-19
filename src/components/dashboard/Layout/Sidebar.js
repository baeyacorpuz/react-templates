import { Drawer, makeStyles, List } from '@material-ui/core';
import { HomeRounded, MessageRounded, PagesRounded } from '@material-ui/icons';
import { NavLink } from "react-router-dom"

const drawerWidth = 100;
const useStyles = makeStyles((theme) => ({
  // toolbar: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#1F236F',
    borderRight: "none !important"
  },
  IconWrapper: {
    height: 64,
    width: 64,
    backgroundColor: '#555892',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 5px',
    '& svg': {
      fontSize: 28,
      fill: "#fff"
    },
  },
  sideBarListItem: {
    display: 'block',
    textAlign: 'center',
    fontWeight: 500,
    marginBottom: 28,
    opacity: 0.65,
    border: 0,
    background: 'transparent',
    marginLeft: 'auto',
    marginRight: 'auto',
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
      lineHeight: 1,
      color: '#fff',
    },
  },
}))

const navMenu = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: <HomeRounded />,
  },
  {
    label: "Pages",
    link: "dashboard/pages",
    icon: <PagesRounded />
  },
  {
    label: "Comments",
    link: "dashboard/comment",
    icon: <MessageRounded />
  },
  // {
  //   label: "Projects",
  //   link: "dashboard/projects",
  //   icon: <AccountBalanceTwoTone />
  // },
  {
    label: "Posts",
    link: "dashboard/posts",
    icon: <PagesRounded />
  },
]

const SidebarMenuItem = (props) => {
  const classes = useStyles()
  const { to, activePath, label, icon } = props

  return (
    <li>
      <NavLink
        exact
        isActive={activePath && ((_, { pathname }) => activePath.some((path) => path === pathname.split('/')[1]))}
        to={`/${to}`}
        className={classes.sideBarListItem}
      >
        <div className={classes.IconWrapper}>{icon}</div>
        <span>{label}</span>
      </NavLink>
    </li>
  )
}

const Sidebar = () => {
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
}

export default Sidebar;