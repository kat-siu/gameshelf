import { connect } from 'react-redux';
import { fetchGame } from '../../actions/game_actions';
import GameShow from './game_show';

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.entities.games[ownProps.match.params.gameId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGame: (id) => dispatch(fetchGame(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameShow);
