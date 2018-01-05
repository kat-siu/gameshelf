import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import GamesIndexContainer from './games/games_index_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <AuthRoute exact path="/" component={LoginFormContainer} />
    <AuthRoute exact path="/" component={SignupFormContainer} />
    <Route exact path="/games" component={GamesIndexContainer} />
  </div>
);

export default App;
