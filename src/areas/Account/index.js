import { Route } from "react-router-dom";

import Profile from "./scenes/Profile";

export default function Account() {
  return [
    <Route exact path="/account/profile" key="/account/profile">
      <Profile />
    </Route>,
  ];
}
