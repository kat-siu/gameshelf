import { RECEIVE_ALL_GAMESHELVES, RECEIVE_SINGLE_GAMESHELF, REMOVE_GAMESHELF } from '../actions/gameshelf_actions';
import { merge } from 'lodash';

const GameshelvesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_GAMESHELVES:
      return action.gameshelves;
    case RECEIVE_SINGLE_GAMESHELF:
      return merge({}, state, { [action.gameshelf.id]: action.gameshelf });
    case REMOVE_GAMESHELF:
      newState = merge({}, state);
      delete newState[action.gameshelf.id];
      return newState;
    default:
      return state;
  }
};

export default GameshelvesReducer;
