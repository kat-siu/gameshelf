import { connect } from 'react-redux';
import { fetchReviews, fetchReview, createReview, updateReview, deleteReview, clearReviewErrors } from '../../actions/review_actions';
import { fetchGame } from '../../actions/game_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state) => {
  return {
    reviews: Object.keys(state.reviews).map(id => state.reviews[id]),
    currentUser: state.session.currentUser,
    errors: state.errors.review || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: game_id => dispatch(fetchReviews(game_id)),
    fetchReview: review => dispatch(fetchReview(review)),
    createReview: review => dispatch(createReview(review)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: id => dispatch(deleteReview(id)),
    clearReviewErrors: errors => dispatch(clearReviewErrors(errors)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
