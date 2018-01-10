import { connect } from 'react-redux';
import { fetchGameshelves } from '../../actions/gameshelf_actions';
import GameshelfShow from './gameshelf_show';

const mapStateToProps = (state, ownProps) => {
  return {
    gameshelf: state.entities.gameshelves[ownProps.match.params.gameshelfId],
    currentUser: state.session.currentUser,
    game: state.entities.games[ownProps.match.params.gameId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGameshelves: user => dispatch(fetchGameshelves(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameshelfShow);
