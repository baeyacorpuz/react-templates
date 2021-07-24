import { useState } from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

import NavbarTwo from "./Layout/NavbarTwo";
import SidebarTwo from "./Layout/SidebarTwo";
import User from "./User/Profile";
import Notification from "./Notifications/Notification";
import Home from "./Layout/Home";
import Products from "./Ecommerce/Products";
import Create from "./Ecommerce/Create";
import Category from "./Ecommerce/Grouping/Category";
import Tag from "./Ecommerce/Grouping/Tag";
import BookForm from "./Books/BookForm";
import Books from "./Books/Books";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
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
          <Route path="/dashboard/home" component={Home} />
          <Route path="/dashboard/profile" component={User} />
          <Route path="/dashboard/notifications" component={Notification} />
          <Route path="/dashboard/book" component={BookForm} />
          <Route path="/dashboard/books" component={Books} />
          <Route path="/dashboard/ecommerce/products" component={Products} />
          <Route path="/dashboard/ecommerce/create" component={Create} />
          <Route path="/dashboard/ecommerce/category" component={Category} />
          <Route path="/dashboard/ecommerce/tag" component={Tag} />
        </Switch>
        <div className={classes.toolbar} />
      </div>
    </>
  );
};

export default DashboardTwo;
