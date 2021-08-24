import { useState } from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

import NavbarTwo from "./Layout/NavbarTwo";
import SidebarTwo from "./Layout/SidebarTwo";
import Profile from "../dashboard/Profile/Profile"
import Notification from "./Notifications/Notification";
import Home from "./Layout/Home";
import Products from "./Ecommerce/Products";
import Create from "./Ecommerce/Create";
import Category from "./Ecommerce/Grouping/Category";
import Tag from "./Ecommerce/Grouping/Tag";
import BookForm from "./Books/BookForm";
import Books from "./Books/Books";
import User from "./User/User";
import UserForm from "./User/UserForm";

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
  container: {
    // backgroundColor: "#e3f2fd",
    borderRadius: 25,
    padding: 20
  }
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
        <div className={classes.container}>
          <Switch>
            <Route path="/d/home" component={Home} />
            <Route path="/d/profile" component={Profile} />
            <Route path="/d/users" component={User} />
            <Route path="/d/user" component={UserForm} />
            <Route path="/d/notifications" component={Notification} />
            <Route path="/d/book" component={BookForm} />
            <Route path="/d/books" component={Books} />
            <Route path="/d/books/category" component={Category} />
            <Route path="/d/books/author" component={Category} />
            <Route path="/d/ecommerce/products" component={Products} />
            <Route path="/d/ecommerce/create" component={Create} />
            <Route path="/d/ecommerce/tag" component={Tag} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default DashboardTwo;
