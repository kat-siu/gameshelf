import React from 'react';
import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {
  currentUser: null
};

const SessionReducer = (state = initialState, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default SessionReducer;
