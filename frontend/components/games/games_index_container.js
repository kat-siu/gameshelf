import { connect } from 'react-redux';
import { fetchGames } from '../../actions/game_actions';
import GamesIndex from './games_index';

const mapStateToProps = ({ games }) => {
  return {
    games: Object.values(state.entities.games),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => dispatch(fetchGames()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesIndex);
