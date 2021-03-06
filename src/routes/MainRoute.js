import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Dashboard from '../components/dashboard/Dashboard';
import Home from '../components/home/Home';
import CommonRoute from './CommonRoute';
import ProtectedRoute from './ProtectedRoute';
import DashboardTwo from '../components/dashboard/DashboardTwo';

const MainRoute = () => {
  const isVerified = useState(false);

  // useEffect(() => {
  //   setIsVerified(true)
  // }, [])

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />

      <Route path="/forgot-password" component={Home} />

      {/* Redirect to /dashboard if user is authenticated */}
      <CommonRoute path="/login" component={Home} />
      <CommonRoute path="/sign-up" component={Home} />

      <ProtectedRoute path="/dashboard-2" component={Dashboard} />
      <ProtectedRoute path="/d" component={DashboardTwo} />

      {isVerified && (
        <>
          <ProtectedRoute path="/profile" component={Dashboard} />
          <ProtectedRoute path="/post" component={Dashboard} />
          <ProtectedRoute path="/d" component={Dashboard} />
        </>
      )}
    </Switch>
  );
}

export default MainRoute;