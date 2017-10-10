// LIBS
import React from 'react';
import { Route, Redirect, Link, Switch, } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

// COMPONENTS
import SessionFormContainer from "./session_form/session_form_container";
import NavBarContainer from "./navbar/navbar_container";
import Footer from "./footer/footer";
import Splash from "./splash_page/splash";
import PostIndexContainer from "./posts/post_index_container";
import PostForm from "./posts/post_form";
import DiscoverContainer from "./discover/discover_container";
import UserShowContainer from "./user/user_show_container";

const App = () => (
  <div>
    <header className="nav-header">
      <Link to="/" className="logo">
      <div className="logo-container">
        <button className="logo">
          expressr.
        <br />
          <p id="home">click to go home</p>
        </button>
      </div>
      </ Link>

      <NavBarContainer />
    </header>
    <div className='main-page'>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/users/:userId" component={UserShowContainer}/>
      <ProtectedRoute path="/discover" component={DiscoverContainer}/>
      <ProtectedRoute path="/users/:userId" component={UserShowContainer}/>
      <Switch>
        <ProtectedRoute path="/" component={PostIndexContainer}/>
        <Route exact path="/" component={SessionFormContainer} />
      </ Switch>
    </ Switch>
    </ div>
    <Footer />
  </div>

);

export default App;
