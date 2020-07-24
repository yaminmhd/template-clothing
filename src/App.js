import React, { useState, useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => null;
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/signin">
          <SignInAndSignUpPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
