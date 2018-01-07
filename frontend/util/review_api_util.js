export const fetchReviews = gameId => {
  return $.ajax({
    url: `/api/games/${gameId}/reviews`,
    method: 'get',
  });
};

export const createReview = review => {
  return $.ajax({
    url: `/api/games/${game_id}/reviews`,
    method: 'post',
    data: { review },
  });
};

export const deleteReview = review => {
  return $.ajax({
    url: `/api/reviews/${review.id}`,
    method: 'delete'
  });
};
