import { RECEIVE_ALL_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case REMOVE_REVIEW:
      const newState = merge({}, state);
      delete newState[action.review.id];
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;
