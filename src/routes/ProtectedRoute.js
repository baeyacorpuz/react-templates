import { Route, Redirect } from "react-router-dom";
import { TOKEN } from "../utils/variables";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (TOKEN ? <Component {...props} /> : <Redirect to="/login" />)} />
  );
};

export default ProtectedRoute;