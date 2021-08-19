import { useEffect } from "react";
import { useHistory, Switch } from "react-router-dom";

import Account from "./areas/Account";
import Authentication from "./areas/Authentication";
import Games from "./areas/Games";

function App() {
  const history = useHistory();

  useEffect(() => {
    history.push("/authentication/login");
  }, []);

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
