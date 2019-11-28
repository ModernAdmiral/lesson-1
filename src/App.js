import React from "react";
import "./App.css";
import HomePage from "./Pages/Homepage/Homepage.jsx";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Pages/Shop/shop.jsx";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        {/* <Route path="/jackets" component={JacketsPage} />
        <Route path="/sneakers" component={SneakersPage} />
        <Route path="/womens" component={WomensPage} />
        <Route path="/mens" component={MensPage} /> */}
      </Switch>
    </div>
  );
};

export default App;
