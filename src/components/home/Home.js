import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPassword from './ForgotPassword/ResetPassword';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

const Home = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
    </Switch>
  );
}
 
export default Home;