import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview, clearReviewErrors, fetchReviews } from '../../actions/review_actions';
import { fetchGames } from '../../actions/game_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    game: state.games[state.reviews[ownProps.reviewId].game_id],
    gameId: parseInt(ownProps.match.params.gameId),
    errors: state.errors.review,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    fetchReviews: () => dispatch(fetchReviews()),
    fetchGames: () => dispatch(fetchGames()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
