import React from "react";
import "./App.css";
import {  Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exac path="/form" component={FormComponent} />
    </Switch>
  );
}

export default App;
