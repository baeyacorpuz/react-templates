import { makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Layout/Navbar";
import SidebarTwo from "./Layout/SidebarTwo";
import User from "./User/User";

const useStyles = makeStyles({
  appBarWrapper: {
    marginLeft: 280,
  },
  contentWrapper: {
    marginTop: 75,
    marginLeft: 280,
  },
});

const DashboardTwo = () => {
  const classes = useStyles();
  return (
    <>
      <SidebarTwo />

      <div className={classes.appBarWrapper}>
        <Navbar />
      </div>

      <div className={classes.contentWrapper}>
        <Switch>
          <Route path="/dashboard-2/user" component={User} />
        </Switch>
      </div>
    </>
  );
};

export default DashboardTwo;
