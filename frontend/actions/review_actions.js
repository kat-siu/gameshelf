import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_SINGLE_REVIEW = 'RECEIVE_SINGLE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

export const receiveReviews = reviews => {
  return {
    type: RECEIVE_ALL_REVIEWS,
    reviews
  };
};

export const receiveReview = review => {
  return {
    type: RECEIVE_SINGLE_REVIEW,
    review
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

export const fetchReviews = game_id => dispatch => {
  return ReviewApiUtil.fetchReviews(game_id).then(reviews => dispatch(receiveReviews(reviews)));
};

export const fetchReview = review => dispatch => {
  return ReviewApiUtil.fetchReview(review).then(review => dispatch(receiveReview(review)));
};

export const createReview = review => dispatch => {
  return ReviewApiUtil.createReview(review).then(review => dispatch(receiveReview(review)), errors => dispatch(receiveReviewErrors(errors.responseJSON)));
};

export const updateReview = review => dispatch => {
  return ReviewApiUtil.createReview(review).then(review => dispatch(receiveReview(review)), errors => dispatch(receiveReviewErrors(errors.responseJSON)));
};

export const deleteReview = id => dispatch => {
  return ReviewApiUtil.deleteReview(id).then((review) => dispatch(removeReview(review)));
};
