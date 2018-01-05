export const fetchGames = () => {
  return $.ajax({
    method: 'get',
    url: '/api/games',
  });
};

export const fetchGame = id => {
  return $.ajax({
    method: 'get',
    url: `/api/games/${id}`,
  });
};
