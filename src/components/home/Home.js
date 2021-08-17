import { makeStyles, Container, Typography } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';


import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPassword from './ForgotPassword/ResetPassword';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

import Background from "../../assets/images/Background.jpg"

const useStyles = makeStyles((theme) => ({
  displayFlex: {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    '@media(min-width: 1280px)': {
      maxWidth: "100vw"
    }
  }
}))

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.displayFlex} maxWidth="lg">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />
      </Switch>
    </Container>
  );
}

export default Home;