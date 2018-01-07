import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

export const receiveReviews = reviews => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews
  };
};

export const removeReview = review => {
  return {
    type: REMOVE_REVIEW,
    review
  };
};

export const receiveReviewErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

export const clearReviewErrors = () => {
  return {
    type: CLEAR_REVIEW_ERRORS,
  };
};

export const fetchReviews = (game_id) => dispatch => {
  ReviewApiUtil.fetchReviews(game_id).then(reviews => dispatch(receiveReviews(reviews)));
};

export const createReview = review => dispatch => {
  ReviewApiUtil.createReview(review).then(review => dispatch(receiveReview(review)), errors => dispatch(receiveReviewErrors(errors.responseJSON)));
};

export const deleteReview = id => dispatch => {
  ReviewApiUtil.deleteReview(id).then((review) => dispatch(removeReview(review)));
};