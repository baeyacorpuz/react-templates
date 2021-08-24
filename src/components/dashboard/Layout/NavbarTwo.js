import {
  AppBar,
  IconButton,
  Toolbar,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { Face, Group, Menu, Notifications } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "rgba(255, 255, 255, 0.2) !important",
    backdropFilter: "blur(5px)",
    "@media (min-width: 600px)": {
      minHeight: 79,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  toolBar: {
    "@media (min-width: 600px)": {
      minHeight: 79,
    },
  }
}));

const NavbarTwo = ({ handleDrawerToggle }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleNotifications = () => {
    history.push("/d/notifications")
  }
  
  const handleContacts = () => {
    console.log("contacts")
  }

  const handleProfile = () => {
    history.push("/d/profile")
  }

  return (
    <>
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="primary"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <IconButton
                onClick={handleNotifications}
              >
                <Notifications />
              </IconButton>
              <IconButton
                onClick={handleContacts}
              >
                <Group />
              </IconButton>
              <IconButton onClick={handleProfile}>
                <Face />
              </IconButton>

            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavbarTwo;
