import React from "react";
import "./App.css";
import HomePage from "./Pages/Homepage/Homepage.jsx";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Pages/Shop/shop.jsx";
import SignInAndSignUp from "./Pages/SignInAndSignUp/SignInAndSignUp.jsx";
import Header from "./Components/Header/Header.jsx";
import { auth } from "./Firebase/Firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Route
          path="/"
          render={() => {
            return <Header currentUser={this.state.currentUser} />;
          }}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
          {/* <Route path="/jackets" component={JacketsPage} />
        <Route path="/sneakers" component={SneakersPage} />
        <Route path="/womens" component={WomensPage} />
        <Route path="/mens" component={MensPage} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
