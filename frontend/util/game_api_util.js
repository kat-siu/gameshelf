export const fetchGames = () => {
  return $.ajax({
    method: 'get',
    url: '/api/games',
  });
};

export const fetchGame = game => {
  return $.ajax({
    method: 'get',
    url: `/api/games/${id}`,
  });
};
