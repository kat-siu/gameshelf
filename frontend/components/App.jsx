import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import GamesIndexContainer from './games/games_index_container';
import GameShowContainer from './games/game_show_container';
import GameshelvesIndexContainer from './gameshelves/gameshelves_index_container';
import GameshelfShowContainer from './gameshelves/gameshelf_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <NavBarContainer />
      </header>

      <Switch>
        <ProtectedRoute path ="/my_games" component={GameshelvesIndexContainer} />
        <ProtectedRoute path="/gameshelves/:id" component={GameshelfShowContainer} />
        <ProtectedRoute path="/games/:gameId" component={GameShowContainer} />
        <ProtectedRoute path="/games" component={GamesIndexContainer} />
      </Switch>

      <AuthRoute path="/" component={LoginFormContainer} />
      <AuthRoute path="/" component={SignupFormContainer} />

    </div>
  )
};

export default App;
