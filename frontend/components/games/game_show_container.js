import { connect } from 'react-redux';
import { fetchGame } from '../../actions/game_actions';
import GameShow from './games_index';

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.entities.games[ownProps.match.params.gameId]
  };
};

// const mapStateToProps = (state, { match }) => {
//   const gameId = parseInt(match.params.gameId);
//   const game = fetchGame(state.entities.games, match.params.gameId);
//   return {
//     gameId,
//     game
//   };
// };
//
const mapDispatchToProps = dispatch => {
  return {
    fetchGame: (id) => dispatch(fetchGame(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameShow);
