import { connect } from 'react-redux';
import { fetchGame } from '../../actions/game_actions';
import { fetchReviews } from '../../actions/review_actions';
import GameShow from './game_show';

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.entities.games[ownProps.match.params.gameId],
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGame: (id) => dispatch(fetchGame(id)),
    fetchReviews: gameId => dispatch(fetchReviews(gameId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameShow);
