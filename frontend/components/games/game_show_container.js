import { connect } from 'react-redux';
import { fetchGame } from '../../actions/game_actions';
import { fetchReviews } from '../../actions/review_actions';
import { fetchGameshelves } from '../../actions/gameshelf_actions';
import { createGameshelfMembership, deleteGameshelfMembership } from '../../actions/gameshelf_membership_actions';
import GameShow from './game_show';

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.entities.games[ownProps.match.params.gameId],
    currentUser: state.session.currentUser,
    gameshelf: state.entities.gameshelves[ownProps.match.params.gameshelfId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGame: (id) => dispatch(fetchGame(id)),
    fetchReviews: gameId => dispatch(fetchReviews(gameId)),
    fetchGameshelves: () => dispatch(fetchGameshelves()),
    createGameshelfMembership: gameshelf_membership => dispatch(createGameshelfMembership(gameshelf_membership)),
    deleteGameshelfMembership: gameshelf_membership => dispatch(deleteGameshelfMembership(gameshelf_membership)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameShow);
