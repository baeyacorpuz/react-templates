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
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const NavbarTwo = ({ handleDrawerToggle }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleNotifications = () => {
    history.push("/dashboard/notifications")
  }
  
  const handleContacts = () => {
    console.log("contacts")
  }

  return (
    <>
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleNotifications}
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
              <IconButton>
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
