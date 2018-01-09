import {
  RECEIVE_ALL_GAMES,
  RECEIVE_SINGLE_GAME,
  START_LOADING_ALL_GAMES,
  START_LOADING_SINGLE_GAME
} from '../actions/game_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_GAMES:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_SINGLE_GAME:
    // case RECEIVE_GAME_ERRORS:
      return Object.assign({}, state, { detailLoading: false });
    case START_LOADING_ALL_GAMES:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_SINGLE_GAME:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;
