import { values } from 'lodash';

export const selectAllGames = games => {
  return (
    values(games)
  );
};
