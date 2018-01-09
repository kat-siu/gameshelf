import { connect } from 'react-redux';
import { fetchGameshelves, fetchGameshelf, createGameshelf, updateGameshelf, deleteGameshelf, clearGameshelfErrors } from '../../actions/gameshelf_actions';
import GameshelvesIndex from './gameshelves_index';

const mapStateToProps = state => {
  return {
    gameshelves: Object.keys(state.entities.gameshelves).map(id => state.entities.gameshelves[id]),
    currentUser: state.session.currentUser,
    errors: state.errors.review || [],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGameshelves: userId => dispatch(fetchGameshelves(userId)),
    fetchGameshelf: gameshelf => dispatch(fetchGameshelf(gameshelf)),
    createGameshelf: gameshelf => dispatch(createGameshelf(gameshelf)),
    updateGameshelf: gameshelf => dispatch(updateGameshelf(gameshelf)),
    deleteGameshelf: id => dispatch(deleteGameshelf(id)),
    clearGameshelfErrors: () => dispatch(clearGameshelfErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameshelvesIndex);
