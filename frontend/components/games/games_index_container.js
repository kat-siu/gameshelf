import { connect } from 'react-redux';
import { fetchGames } from '../../actions/game_actions';
import { selectAllGames } from '../../reducers/selectors';
import GamesIndex from './games_index';

const mapStateToProps = (state, ownProps) => {
  return {
    games: Object.values(state.entities.books)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => dispatch(fetchGames()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesIndex);
