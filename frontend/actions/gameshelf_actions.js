import * as GameshelfApiUtil from '../util/gameshelf_api_util';

export const RECEIVE_ALL_GAMESHELVES = 'RECEIVE_ALL_GAMESHELVES';
export const RECEIVE_SINGLE_GAMESHELF = 'RECEIVE_SINGLE_GAMESHELF';
export const REMOVE_GAMESHELF = 'REMOVE_GAMESHELF';
export const RECEIVE_GAMESHELF_ERRORS = 'RECEIVE_GAMESHELF_ERRORS';
export const CLEAR_GAMESHELF_ERRORS = 'CLEAR_GAMESHELF_ERRORS';

export const receiveGameshelves = gameshelves => {
  return {
    type: RECEIVE_ALL_GAMESHELVES,
    gameshelves
  };
};

export const receiveGameshelf = gameshelf => {
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

export const fetchGameshelves = userId => dispatch => {
  return GameshelfApiUtil.fetchGameshelves(userId).then(gameshelves => dispatch(receiveGameshelves(gameshelves)));
};

export const fetchGameshelf = gameshelf => dispatch => {
  return GameshelfApiUtil.fetchGameshelf(gameshelf).then(gameshelf => dispatch(receiveGameshelf(gameshelf)));
};

export const createGameshelf = gameshelf => dispatch => {
  return GameshelfApiUtil.createGameshelf(gameshelf).then(gameshelf => dispatch(receiveGameshelf(gameshelf)), errors => dispatch(receiveGameshelfErrors(errors.responseJSON)));
};

export const updateGameshelf = gameshelf => dispatch => {
  return GameshelfApiUtil.updateGameshelf(gameshelf).then(gameshelf => dispatch(receiveGameshelf(gameshelf)), errors => dispatch(receiveGameshelfErrors(errors.responseJSON)));
};

export const deleteGameshelf = id => dispatch => {
  return GameshelfApiUtil.deleteGameshelf(id).then((gameshelf) => dispatch(removeGameshelf(gameshelf)));
};
