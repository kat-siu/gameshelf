import * as GameshelfMembershipApiUtil from '../util/gameshelf_membership_api_util';
import { fetchGameshelf } from './gameshelf_actions';
import { fetchGame } from './game_actions';

export const createGameshelfMembership = gameshelf_membership => dispatch => {
  return GameshelfMembershipApiUtil.createGameshelfMembership(gameshelf_membership).then(game => fetchGame(game.id));
};

export const deleteGameshelfMembership = id => dispatch => {
  return GameshelfMembershipApiUtil.deleteGameshelfMembership(id).then(gameshelf_id => fetchGameshelf(gameshelf_id));
};
