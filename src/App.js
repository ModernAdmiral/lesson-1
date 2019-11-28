import React, { Component } from "react";
import "./App.css";
import HomePage from "./Pages/Homepage/Homepage.jsx";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
        {/* <Route path="/jackets" component={JacketsPage} />
        <Route path="/sneakers" component={SneakersPage} />
        <Route path="/womens" component={WomensPage} />
        <Route path="/mens" component={MensPage} /> */}
      </Switch>
    </div>
  );
};

export default App;
