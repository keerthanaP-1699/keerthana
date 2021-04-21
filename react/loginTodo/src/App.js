import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from "./login";
import Todolist from "./todo";

export default function app(){
  return(
    <Router>
      <div>
        <li>
          <Link to='/login'>login</Link>
        </li>
        <li>
          <Link to='/todo'></Link>
        </li>
      </div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/todo">
          <Todolist />
        </Route>
      </Switch>
    </Router>
  )
}