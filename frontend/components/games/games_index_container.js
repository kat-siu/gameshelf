import { connect } from 'react-redux';
import { fetchGames, fetchGame} from '../../actions/game_actions';
import GamesIndex from './games_index';

const mapStateToProps = state => {
  return {
    games: Object.keys(state.entities.games).map(id => state.entities.games[id]),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => dispatch(fetchGames()),
    fetchGame: game => dispatch(fetchGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesIndex);
