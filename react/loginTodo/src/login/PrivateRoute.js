/**
 * Redirect module is extracted from react-router to redirect from one page to another
 * Route is extracted from react-router-dom and is used to send the path 
 */
import { Redirect } from "react-router";
import { Route } from "react-router-dom";

/**
 * PrivateRoute wil get the token generated and it will redirect to login page when it token is not there
 */
export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("loggedin") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
