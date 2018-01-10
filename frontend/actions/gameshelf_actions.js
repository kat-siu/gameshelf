import * as GameshelfApiUtil from '../util/gameshelf_api_util';

export const RECEIVE_ALL_GAMESHELVES = 'RECEIVE_ALL_GAMESHELVES';
export const RECEIVE_SINGLE_GAMESHELF = 'RECEIVE_SINGLE_GAMESHELF';
export const REMOVE_GAMESHELF = 'REMOVE_GAMESHELF';
export const RECEIVE_GAMESHELF_ERRORS = 'RECEIVE_GAMESHELF_ERRORS';
export const CLEAR_GAMESHELF_ERRORS = 'CLEAR_GAMESHELF_ERRORS';

export const receiveAllGameshelves = gameshelves => {
  return {
    type: RECEIVE_ALL_GAMESHELVES,
    gameshelves
  };
};

export const receiveSingleGameshelf = gameshelf => {
  return {
    type: RECEIVE_SINGLE_GAMESHELF,
    gameshelf
  };
};

export const removeGameshelf = gameshelf => {
  return {
    type: REMOVE_GAMESHELF,
    gameshelf
  };
};

export const receiveGameshelfErrors = errors => {
  return {
    type: RECEIVE_GAMESHELF_ERRORS,
    errors
  };
};

export const clearGameshelfErrors = () => {
  return {
    type: CLEAR_GAMESHELF_ERRORS,
  };
};

export const fetchGameshelves = user => dispatch => {
  return GameshelfApiUtil.fetchGameshelves(user).then(gameshelves => dispatch(receiveAllGameshelves(gameshelves)));
};

export const fetchGameshelf = gameshelf => dispatch => {
  return GameshelfApiUtil.fetchGameshelf(gameshelf).then(gameshelf => dispatch(receiveSingleGameshelf(gameshelf)));
};

export const createGameshelf = gameshelf => dispatch => {
  return GameshelfApiUtil.createGameshelf(gameshelf).then(gameshelf => dispatch(receiveSingleGameshelf(gameshelf)));
};

export const updateGameshelf = gameshelf => dispatch => {
  return GameshelfApiUtil.updateGameshelf(gameshelf).then(gameshelf => dispatch(receiveSingleGameshelf(gameshelf)), errors => dispatch(receiveGameshelfErrors(errors.responseJSON)));
};

export const deleteGameshelf = gameshelf => dispatch => {
  return GameshelfApiUtil.deleteGameshelf(gameshelf).then((gameshelf) => dispatch(removeGameshelf(gameshelf)));
};
