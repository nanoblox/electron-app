import { Route } from "react-router-dom";

import Blocked from "./scenes/Blocked";
import Profile from "./scenes/Profile";
import Unverified from "./scenes/Unverified";
import Verified from "./scenes/Verified";

export default function Games() {
  return [
    <Route exact path="/games/blocked" key="/games/blocked">
      <Blocked />
    </Route>,
    <Route exact path="/games/profile" key="/games/profile">
      <Profile />
    </Route>,
    <Route exact path="/games/unverified" key="/games/unverified">
      <Unverified />
    </Route>,
    <Route exact path="/games/verified" key="/games/verified">
      <Verified />
    </Route>,
  ];
}
