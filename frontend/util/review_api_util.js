export const fetchReviews = game_id => {
    return $.ajax({
    url: '/api/reviews',
    method: 'get',
    data: { game_id }
  });
};

export const fetchReview = review => {
  return $.ajax({
    url: `/api/reviews/${review.id}`,
    method: 'get',
  });
};

export const createReview = review => {
  return $.ajax({
    url: '/api/reviews',
    method: 'post',
    data: { review },
  });
};

export const updateReview = review => {
  return $.ajax({
    url: `/api/reviews/${review.id}`,
    method: 'post',
    data: { review },
  });
};

export const deleteReview = id => {
  return $.ajax({
    url: `/api/reviews/${id}`,
    method: 'delete'
  });
};
