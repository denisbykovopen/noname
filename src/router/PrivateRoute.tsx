import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
// import { fire } from "../firebase/fire";
import { useSession } from "../hooks/useSession";

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  //   const user = fire.auth().currentUser;
  const userData = useSession();
  console.log(
    " --- PrivateRoute/userData from useSession:",
    userData.userData !== null
  );
  // if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props): any =>
        userData.userData !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
