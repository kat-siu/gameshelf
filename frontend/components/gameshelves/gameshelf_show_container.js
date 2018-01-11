import { connect } from 'react-redux';
import { fetchGameshelves } from '../../actions/gameshelf_actions';
import { fetchGames } from '../../actions/game_actions';
import GameshelfShow from './gameshelf_show';

const mapStateToProps = (state, ownProps) => {
  return {
    gameshelf: state.entities.gameshelves[ownProps.match.params.id],
    gameshelves: Object.values(state.entities.gameshelves),
    currentUser: state.session.currentUser,
    games: state.entities.games
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGameshelves: user => dispatch(fetchGameshelves(user)),
    fetchGames: () => dispatch(fetchGames()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameshelfShow);
