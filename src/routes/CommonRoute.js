import { Route, Redirect } from "react-router-dom";
import { TOKEN } from "../utils/variables";

const CommonRoute = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) =>
        TOKEN ? (
          <Redirect to="/dashboard/home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default CommonRoute;
