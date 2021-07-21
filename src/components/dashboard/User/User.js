import { Helmet } from "react-helmet";
import {
  Container,
  Grid,
  makeStyles,
  Tab,
  Tabs,
} from "@material-ui/core";
import { useState } from "react";
import PageTitle from "../../common/PageTitle";
import ChangePassword from "./ChangePassword";
import General from "./General";

const useStyles = makeStyles({
  breadcrumbs: {
    fontSize: 12,
  },
  headerTitle: {
    marginBottom: 40,
  },
  contentWrapper: {
    marginBottom: 40
  },
});

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        children
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const User = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet title="User: Account"></Helmet>
      <PageTitle title="User" link={"/dashboard-2/user"} />
      <Container maxWidth="lg">
        <Grid container spacing={2} className={classes.contentWrapper}>
          <Grid item xs={12}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="General" {...a11yProps(0)} />
              <Tab label="Social Links" {...a11yProps(1)} />
              <Tab label="Change Password" {...a11yProps(2)} />
            </Tabs>
          </Grid>
        </Grid>
        <TabPanel value={value} index={0}>
          <General />
        </TabPanel>
        <TabPanel value={value} index={1}>
          2
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ChangePassword />
        </TabPanel>
      </Container>
    </>
  );
};

export default User;
