import * as GameshelfMembershipApiUtil from '../util/gameshelf_membership_api_util';
import { fetchGameshelves } from './gameshelf_actions';
import { fetchGame } from './game_actions';

export const createGameshelfMembership = gameshelf_membership => dispatch => {
  return GameshelfMembershipApiUtil.createGameshelfMembership(gameshelf_membership).then(gameshelf => fetchGameshelves(gameshelf.user_id));
};

export const deleteGameshelfMembership = gameshelf_membership => dispatch => {
  return GameshelfMembershipApiUtil.deleteGameshelfMembership(gameshelf_membership).then(gameshelf => fetchGameshelves(gameshelf.user_id));
};
