import { connect } from 'react-redux';
import { fetchGameshelves } from '../../actions/gameshelf_actions';
import GamesByUser from './games_by_user';

const mapStateToProps = (state) => {
  return {
    gameshelves: Object.values(state.entities.gameshelves),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGameshelves: user => dispatch(fetchGameshelves(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesByUser);
