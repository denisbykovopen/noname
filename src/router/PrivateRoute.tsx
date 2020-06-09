import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
// import { fire } from "../firebase/fire";
import { useSession } from "../hooks/useSession";

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}: RouteProps) => {
  //   const user = fire.auth().currentUser;
  const userData = useSession();
  console.log(" --- PrivateRoute/userData from useSession:", userData);
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props): any =>
        userData !== null ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
