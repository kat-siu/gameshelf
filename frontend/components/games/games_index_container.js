import { connect } from 'react-redux';
import { fetchGames } from '../../actions/game_actions';
import { selectAllGames } from '../../reducers/selectors';
import GamesIndex from './games_index';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     games: Object.values(state.entities.books)
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchGames: () => dispatch(fetchGames()),
//   };
// };
//

const mapStateToProps = state => {
  return {
    games: Object.keys(state.entities.games).map(id => state.entities.games[id])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGames: () => dispatch(fetchGames())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(GamesIndex);
