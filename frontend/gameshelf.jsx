import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchGames, fetchGame } from './actions/game_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchGames = fetchGames;
  window.fetchGame = fetchGame;
  // end of testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
