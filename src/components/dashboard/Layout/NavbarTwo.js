import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

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

  return (
    <>
      <AppBar position="fixed" elevation={1} className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Templated
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavbarTwo;
