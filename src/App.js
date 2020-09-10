import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./app-history";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
      </Switch>
    </Router>
  );
}

export default App;
