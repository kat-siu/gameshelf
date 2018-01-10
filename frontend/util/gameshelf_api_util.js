export const fetchGameshelves = user => {
    return $.ajax({
    url: '/api/gameshelves',
    method: 'get',
    data: user,
  });
};

export const fetchGameshelf = gameshelf => {
  return $.ajax({
    url: `/api/gameshelves/${gameshelf.id}`,
    method: 'get',
  });
};

export const createGameshelf = gameshelf => {
  return $.ajax({
    url: '/api/gameshelves',
    method: 'post',
    data: { gameshelf },
  });
};

export const updateGameshelf = gameshelf => {
  return $.ajax({
    url: `/api/gameshelves/${gameshelf.id}`,
    method: 'post',
    data: { gameshelf },
  });
};

export const deleteGameshelf = gameshelf => {
  return $.ajax({
    url: `/api/gameshelves/${gameshelf.id}`,
    method: 'delete'
  });
};
