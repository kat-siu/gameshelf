import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => {
      return loggedIn ? (
      <Redirect to="/my_games" />
    ) : (
      <Component {...props} />
    )}
  } />
)


const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => {
        return loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
        // where login container is located
      )}
    } />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUser)}
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
