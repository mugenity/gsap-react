import React from "react";
import { Switch, Route } from "react-router-dom";

import "./default.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
      </Switch>
    </div>
  );
}

export default App;
