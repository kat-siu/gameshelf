import { combineReducers } from 'redux';
import GamesReducer from './games_reducer';

const EntitiesReducer = combineReducers({
  games: GamesReducer,
});

export default EntitiesReducer;
