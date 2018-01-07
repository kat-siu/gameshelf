import { connect } from 'react-redux';
import { fetchReviews, createReview, deleteReview, clearReviewErrors } from '../../actions/review_actions';
import { fetchGame } from '../../actions/game_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => {
  return {
    game: ownProps.game,
    reviews: fetchReviews(state),
    currentUser: state.session.currentUser,
    errors: state.errors.review,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: game_id => dispatch(fetchReviews(game_id)),
    createReview: review => dispatch(createReview(review)),
    deleteReview: id => dispatch(deleteReview(id)),
    clearReviewErrors: errors => dispatch(clearReviewErrors(errors)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
