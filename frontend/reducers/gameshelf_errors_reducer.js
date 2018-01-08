import { RECEIVE_GAMESHELF_ERRORS, CLEAR_GAMESHELF_ERRORS } from '../actions/gameshelf_actions';

const GameshelfErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GAMESHELF_ERRORS:
      return action.errors;
    case CLEAR_GAMESHELF_ERRORS:
      return [];
    default:
      return state;
  }
};

export default GameshelfErrorsReducer;
