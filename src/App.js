import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import LoginPage from "./components/LoginPage";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/form" component={FormComponent} exact={true} />
      </Switch>
    </Router>
  );
}

export default App;
