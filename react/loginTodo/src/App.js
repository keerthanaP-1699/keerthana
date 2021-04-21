import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login/Login";
import Todolist from "./todo/TodoList";
import PrivateRoute from "./login/PrivateRoute";

/**
 *  Router will have children list that has the link 
 * and switch is used to make the link goes to the respected file/component 
 * PrivateRouter will be show only when we login 
 */
export default function app() {
  return (
    <Router>
      <div>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/todo"></Link>
        </li>
      </div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/todo">
          <Todolist />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
