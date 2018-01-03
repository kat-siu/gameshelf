import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>gameshelf App</h1>, root);
});
