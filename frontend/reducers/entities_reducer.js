import { combineReducers } from 'redux';
import GamesReducer from './games_reducer';
import GameshelvesReducer from './gameshelves_reducer';

const EntitiesReducer = combineReducers({
  games: GamesReducer,
  gameshelves: GameshelvesReducer,
});

export default EntitiesReducer;
