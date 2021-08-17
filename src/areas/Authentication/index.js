import { Route } from "react-router-dom";

import Login from "./scenes/Login";

export default function Authentication() {
  return [
    <Route exact path="/authentication/login" key="/authentication/login">
      <Login />
    </Route>,
  ];
}
