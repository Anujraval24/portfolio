import React from "react";
import { createBrowserHistory } from "history";

import "./App.css";

import NavBarPage from "./containers/NavBarPage";

import PublicRoutes from "./routes";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <NavBarPage history={history} />
      <PublicRoutes history={history} />
    </div>
  );
}

export default App;
