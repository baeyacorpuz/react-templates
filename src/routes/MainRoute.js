import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import Home from '../components/home/Home';

const MainRoute = () => {
  const isVerified = useState(true);
  
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />

      <Route path="/forgot-password" component={Home} />

      <Route path="/login" component={Home} />
      <Route path="/sign-up" component={Home} />

      {isVerified && (
      <Route path="/dashboard" component={Dashboard} />
      )}
    </Switch>
  );
}

export default MainRoute;