import * as GameApiUtil from '../util/game_api_util';

export const RECEIVE_ALL_GAMES = 'RECEIVE_ALL_GAMES';
export const RECEIVE_SINGLE_GAME = 'RECEIVE_SINGLE_GAME';
export const START_LOADING_ALL_GAMES = 'START_LOADING_ALL_GAMES';
export const START_LOADING_SINGLE_GAME = 'START_LOADING_SINGLE_GAME';

export const receiveAllGames = games => {
  return {
    type: RECEIVE_ALL_GAMES,
    games
  };
};

export const receiveSingleGame = game => {
  return {
    type: RECEIVE_SINGLE_GAME,
    game
  };
};

export const startLoadingAllGames = () => {
  return {
    type: START_LOADING_ALL_GAMES
  };
};

export const startLoadingSingleGame = () => {
  return {
    type: START_LOADING_SINGLE_GAME
  };
};


export const fetchGames = () => dispatch => {
  dispatch(startLoadingAllGames());
  return GameApiUtil.fetchGames().then(games => dispatch(receiveAllGames(games)));
};

export const fetchGame = id => dispatch => {
  dispatch(startLoadingSingleGame());
  return GameApiUtil.fetchGame(id).then(game => dispatch(receiveSingleGame(game)));
};
