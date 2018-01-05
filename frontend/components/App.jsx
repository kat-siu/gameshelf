import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import GamesIndexContainer from './games/games_index_container';
import GameShowContainer from './games/game_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <AuthRoute exact path="/" component={LoginFormContainer} />
    <AuthRoute exact path="/" component={SignupFormContainer} />
    <ProtectedRoute exact path="/games" component={GamesIndexContainer} />
    <Route path="/games/:gameId" component={GameShowContainer} />

  </div>
);

export default App;
