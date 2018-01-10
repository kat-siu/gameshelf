import { connect } from 'react-redux';
import { fetchGameshelves, fetchGameshelf, createGameshelf, updateGameshelf, deleteGameshelf, clearGameshelfErrors } from '../../actions/gameshelf_actions';
import GameshelvesIndex from './gameshelves_index';

const mapStateToProps = state => {
  return {
    gameshelves: Object.values(state.entities.gameshelves),
    currentUser: state.session.currentUser,
    errors: state.errors.gameshelf || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGameshelves: (user) => dispatch(fetchGameshelves(user)),
    fetchGameshelf: gameshelf => dispatch(fetchGameshelf(gameshelf)),
    createGameshelf: gameshelf => dispatch(createGameshelf(gameshelf)),
    deleteGameshelf: id => dispatch(deleteGameshelf(id)),
    clearGameshelfErrors: () => dispatch(clearGameshelfErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameshelvesIndex);
