import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const login = user => dispatch => (
  SessionApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveUserErrors(errors.responseJSON)))
);
