import { combineReducers } from 'redux';
import GamesReducer from './games_reducer';
import GameshelvesReducer from './gameshelves_reducer';
import ReviewsReducer from './reviews_reducer';

const EntitiesReducer = combineReducers({
  games: GamesReducer,
  gameshelves: GameshelvesReducer,
  reviews: ReviewsReducer,
});

export default EntitiesReducer;
