import { connect } from 'react-redux';
import { fetchGames } from '../../actions/game_actions';
import GamesIndex from './games_index';

const mapStateToProps = state => {
  return {
    games: Object.keys(state.entities.games).map(id => state.entities.games[id]),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => dispatch(fetchGames()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(GamesIndex);
