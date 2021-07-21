import { useState } from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

import NavbarTwo from "./Layout/NavbarTwo";
import SidebarTwo from "./Layout/SidebarTwo";
import User from "./User/User";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));

const DashboardTwo = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <div>
        <CssBaseline />
        <NavbarTwo handleDrawerToggle={handleDrawerToggle} />
        <SidebarTwo
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />
      </div>

      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/dashboard-2/user" component={User} />
        </Switch>
      </div>
    </>
  );
};

export default DashboardTwo;
