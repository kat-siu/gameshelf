import { RECEIVE_ALL_GAMES, RECEIVE_SINGLE_GAME } from '../actions/game_actions';
import { merge } from 'lodash';

const GamesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_GAMES:
      return action.games;
    case RECEIVE_SINGLE_GAME:
      newState = merge({}, state, { [action.game.id]: action.game });
      return newState;
    default:
      return state;
  }
};

export default GamesReducer;
