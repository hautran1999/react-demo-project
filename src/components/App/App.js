import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Navigation from "../Navigation/Navigation";
import LandingPage from "../Landing/LandingPage";
// import SignUpPage from "../SignUp/SignUpPage";
// import SignInPage from "../SignIn/SignInPage";
// import PasswordForgetPage from "../PasswordForget/PasswordForgetPage";
import HomePage from "../Home/HomePage";
import AccountPage from "../Account/AccountPage";
import AdminPage from "../Admin/AdminPage";

import * as ROUTES from "../../constants/routes";
import Header from "../../containers/Header";

const App = () => {
  
  return (
    <Router>
      <div>
        <Header />

        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </Router>
  );
};

export default App;
