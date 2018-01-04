import React from 'react';
import { RECEIVE_ALL_GAMES } from '../actions/game_actions';

const GamesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_GAMES:
      return action.games;
    default:
      return state;
  }
};

export default GamesReducer;
