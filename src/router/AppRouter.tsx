import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Messanger from "../pages/Messanger";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import PrivateRoute from "./PrivateRoute";

const AppRouter = (): React.ReactElement => (
  <Router>
    {/* <div> */}
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/messanger" component={Messanger} />
      <Redirect to="/" />
    </Switch>
    {/* </div> */}
  </Router>
);

export default AppRouter;
