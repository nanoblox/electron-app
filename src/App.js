import { Switch, Link } from "react-router-dom";

import Account from "./areas/Account";
import Authentication from "./areas/Authentication";
import Games from "./areas/Games";

function App() {
  return (
    <div className="App">
      <Switch>
        {Account()}
        {Authentication()}
        {Games()}
      </Switch>
    </div>
  );
}

export default App;
