import { RECEIVE_ALL_GAMES, RECEIVE_SINGLE_GAME } from '../actions/game_actions';
import { merge } from 'lodash';

const GamesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_GAMES:
      return action.games;
    case RECEIVE_SINGLE_GAME:
      return merge({}, state, { [action.game.id]: action.game });
    default:
      return state;
  }
};

export default GamesReducer;
