export const fetchGameshelves = userId => {
    return $.ajax({
    url: `/api/users/${userId}`,
    method: 'get',
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

export const deleteGameshelf = id => {
  return $.ajax({
    url: `/api/gameshelves/${id}`,
    method: 'delete'
  });
};
