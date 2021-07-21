import { Helmet } from "react-helmet";
import {
  Breadcrumbs,
  Container,
  Grid,
  Link,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  breadcrumbs: {
    fontSize: 12,
  },
  headerTitle: {
    marginBottom: 40
  }
});

const User = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet title="User: Account"></Helmet>
      <Container maxWidth="lg">
        <Grid container spacing={2} className={classes.headerTitle}>
          <Grid item md={6} sm={12} xs={12}>
            <Typography variant="h2">User</Typography>

            <Breadcrumbs className={classes.breadcrumbs}>
              <Link color="inherit" href="/">
                Dashboard
              </Link>
              <Link color="inherit" href="/dashboard-2/user/">
                User
              </Link>
              <Typography variantMapping="p" variant="caption" color="textPrimary">Account Settings</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="General" />
              <Tab label="Notifications" />
              <Tab label="Social Links" />
              <Tab label="Change Password" />
            </Tabs>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default User;
